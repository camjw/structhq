from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class VariableSizePagination(PageNumberPagination):
    page_size_query_param = "page_size"

    def get_paginated_response(self, data):
        return Response(data)
