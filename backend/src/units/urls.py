from django.urls import path, include
from . import views
from django.conf import settings
from django.contrib.auth.views import LogoutView

from django.views.generic.base import TemplateView

app_name='units'


urlpatterns = [
	path('', TemplateView.as_view(template_name='index.html'), name='index'),

]