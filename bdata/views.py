from django.shortcuts import render
from django.http import HttpResponse
from bdata.models import Route, Bus, BPoint
# Create your views here.

def find(request):
    if request.method=="POST":
        route = request.POST.get("route")
        bpoint = request.POST.get("bpoint")
        a = BPoint.objects.filter(id=bpoint)
        context = {
            "routeds" : a[0].route.all()
        }
        return render(request, 'bdata/find.html', context=context)
    context = {
        "routes" : Route.objects.all(),
        "buses" : Bus.objects.all(),
        "bpoints" : BPoint.objects.all()
    }
    return render(request, 'bdata/find.html', context=context)

def home(request):
    context = {
        "routes" : Route.objects.all(),
        "buses" : Bus.objects.all()
    }
    return render(request, 'bdata/home.html', context=context)

def search(request):
    context = {

    }

    return render(request, 'bdata/search.html', context=context)
