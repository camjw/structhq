from django.urls import path

from structhq import services
from structhq_api.views.profile_views import ProfileRetrieveView
from structhq_api.views.struct_views import StructCreateView

struct_urls = [
    path("struct/new/", StructCreateView.as_view(struct_service=services.struct_service), name="struct_create"),
]


urlpatterns = [
    *struct_urls,
]
