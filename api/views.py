from django.shortcuts import render
from rest_framework import viewsets
from bdata.models import BusLoc, Bus
from api.serializers import BusLocSerializer

class BusLocViewSet(viewsets.ModelViewSet):
    queryset = BusLoc.objects.all()
    serializer_class = BusLocSerializer
    