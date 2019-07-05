from django.shortcuts import render
from django.http import HttpResponse
from bdata.models import Route, Bus
# Create your views here.

def test(request):
    b = Bus.objects.first()

    return HttpResponse(f"{b.route.source}")