from django.urls import path, include
# from .views import UnitListView, UnitDetailView, UnitCreateView, UnitUpdateView, UnitDeleteView
# urlpatterns = [
#     path('', UnitListView.as_view()),
#     path('create/', UnitDetailView.as_view()),
#     path('<pk>/update', UnitUpdateView.as_view()),
#     path('<pk>/delete', UnitDeleteView.as_view()),
#     path('<pk>', UnitCreateView.as_view()),
# ]

from units.api.views import UnitViewSet, LikeListView
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('units', UnitViewSet, base_name='units')

urlpatterns = [
    path('', include(router.urls)),
    path('likes/', views.LikeListView.as_view()),

    path('likes/<int:filmID>/', views.LikeApiView.as_view()),
]
