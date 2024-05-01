from django.urls import path
from . views import visualization

urlpatterns = [
    path('', visualization, name='visualization'),
]
