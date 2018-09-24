from django.urls import path
# from .views import UnitListView, UnitDetailView, UnitCreateView, UnitUpdateView, UnitDeleteView

# urlpatterns = [
#     path('', UnitListView.as_view()),
#     path('create/', UnitDetailView.as_view()),
#     path('<pk>/update', UnitUpdateView.as_view()),
#     path('<pk>/delete', UnitDeleteView.as_view()),
#     path('<pk>', UnitCreateView.as_view()),
# ]

from units.api.views import UnitViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', UnitViewSet, base_name='units')
urlpatterns = router.urls
