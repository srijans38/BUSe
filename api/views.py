from django.shortcuts import render
from rest_framework import viewsets
from bdata.models import BusLoc, Bus, Route, BPoint
from api.serializers import BusLocSerializer, BPointSerializer, BusSerializer, RouteSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class BusLocViewSet(viewsets.ModelViewSet):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = BusLoc.objects.all()
    serializer_class = BusLocSerializer

class BusViewSet(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class RouteViewSet(viewsets.ModelViewSet):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

class BPointViewSet(viewsets.ModelViewSet):
    queryset = BPoint.objects.all()
    serializer_class = BPointSerializer

