from django.db import models


class MouseClick(models.Model):
    x = models.IntegerField()
    y = models.IntegerField()
    image = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
