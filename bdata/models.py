from django.db import models

class Route(models.Model):
    source = models.CharField(max_length=1)
    destination = models.CharField(max_length=1)