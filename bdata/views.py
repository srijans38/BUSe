from django.shortcuts import render
from django.http import HttpResponse
from bdata.models import Route, Bus
# Create your views here.

def find(request):
    if request.method=="POST":
        return HttpResponse(request.POST.get("route"))
    context = {
        "routes" : Route.objects.all(),
        "buses" : Bus.objects.all()
    }
    return render(request, 'bdata/find.html', context=context)

def home(request):
    context = {
        "routes" : Route.objects.all(),
        "buses" : Bus.objects.all()
    }
    return render(request, 'bdata/home.html', context=context)
