from django.contrib import admin
from bdata.models import Route, Bus

class RouteAdmin(admin.ModelAdmin):
    pass

class BusAdmin(admin.ModelAdmin):
    pass

admin.site.register(Route, RouteAdmin)
admin.site.register(Bus, BusAdmin)