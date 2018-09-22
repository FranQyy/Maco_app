from django.urls import path
from .views import UnitListView, UnitDetailView

urlpatterns = [
    path('', UnitListView.as_view()),
    path('<pk>', UnitDetailView.as_view()),
]
