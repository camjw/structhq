import enum
from typing import Any, List, Optional, TypedDict

from django.core.paginator import EmptyPage, Page
from django.db.models.query import QuerySet
from loguru import logger
from rest_framework import pagination
from rest_framework.response import Response


class PaginatedResponseDict(TypedDict):
    count: int
    next: Optional[str]
    previous: Optional[str]
    results: List[Any]


class EntityPageNumberPagination(pagination.PageNumberPagination):
    page_query_param = "page_index"
    page_size_query_param = "page_size"

    def paginate_queryset(self, queryset: QuerySet[Any], request, view=None):
        """Custom pagination to return an empty page instead of 404 on page overflow"""
        self.request = request

        logger.info(f"Paginating queryset with {queryset.count()} items")

        page_size = self.get_page_size(request)
        if not page_size:
            logger.warning("Page size is not set, returning None")
            return None

        paginator = self.django_paginator_class(queryset, page_size)
        page_number = request.query_params.get(self.page_query_param, 1)
        logger.info(f"Page number: {page_number}")

        try:
            page_number = int(page_number) + 1
        except ValueError:
            page_number = 1

        if page_number in self.last_page_strings:
            page_number = paginator.num_pages

        try:
            self.page = paginator.page(page_number)
        except EmptyPage:
            # If page is out of range, return an empty page
            self.page = Page([], page_number, paginator)

            return list()

        self.request = request
        return list(self.page)

    def get_paginated_response(self, data):
        """Custom response format"""
        return Response(
            {
                "count": self.page.paginator.count,
                "next": self.get_next_link(),
                "previous": self.get_previous_link(),
                "results": data,
            },
        )


class EntitySortDimension(enum.Enum):
    LAST_UPDATED = "Last updated"
    DATE_CREATED = "Date created"
    ALPHABETICAL = "Alphabetical"


class EntitySortOrder(enum.Enum):
    NEWEST_FIRST = "Newest first"
    OLDEST_FIRST = "Oldest first"

    A_TO_Z = "A to Z"
    Z_TO_A = "Z to A"


def get_entity_ordering_string(request):
    try:
        sort_dimension = EntitySortDimension(request.GET.get("sort_dimension", None))
        sort_order = EntitySortOrder(request.GET.get("sort_order", None))
    except ValueError:
        return None

    sort_dimension_property = None

    if sort_dimension == EntitySortDimension.ALPHABETICAL:
        sort_dimension_property = "title"
    elif sort_dimension == EntitySortDimension.DATE_CREATED:
        sort_dimension_property = "created_at"
    elif sort_dimension == EntitySortDimension.LAST_UPDATED:
        sort_dimension_property = "updated_at"
    else:
        return None

    if sort_order == EntitySortOrder.NEWEST_FIRST:
        sort_order_property = "-" + sort_dimension_property
    elif sort_order == EntitySortOrder.OLDEST_FIRST:
        sort_order_property = sort_dimension_property
    elif sort_order == EntitySortOrder.A_TO_Z:
        sort_order_property = "-" + sort_dimension_property
    elif sort_order == EntitySortOrder.Z_TO_A:
        sort_order_property = sort_dimension_property

    return sort_order_property


class PaginationMixin(object):
    @property
    def paginator(self):
        """
        The paginator instance associated with the view, or `None`.
        """
        if not hasattr(self, "_paginator"):
            if self.pagination_class is None:
                self._paginator = None
            else:
                self._paginator = self.pagination_class()
        return self._paginator

    def paginate_queryset(self, queryset: QuerySet[Any]) -> Optional[QuerySet[Any]]:
        """
        Return a single page of results, or `None` if pagination
        is disabled.
        """
        if self.paginator is None:
            return None
        return self.paginator.paginate_queryset(queryset, self.request, view=self)

    def get_paginated_response(self, data: Any) -> PaginatedResponseDict:
        """
        Return a paginated style `Response` object for the given
        output data.
        """
        assert self.paginator is not None
        return self.paginator.get_paginated_response(data)
