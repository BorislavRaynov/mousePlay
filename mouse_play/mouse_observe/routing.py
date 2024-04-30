from django.urls import path
from .consumers import MouseDataConsumer

websocket_urlpatterns = [
    path('ws/mouse_data/', MouseDataConsumer.as_asgi()),
]
