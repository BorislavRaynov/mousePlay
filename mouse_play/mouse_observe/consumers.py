from asgiref.sync import sync_to_async
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import MouseClick


class MouseDataConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        if data['event'] == 'left_click':
            await self.save_click(data)

    @sync_to_async
    def save_click(self, data):
        MouseClick.objects.create(
            x=data['x'],
            y=data['y'],
            image=data['image']
        )
