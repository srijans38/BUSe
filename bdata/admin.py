from django.contrib import admin
from bdata.models import Route, Bus, BusLoc, BPoint


class RouteAdmin(admin.ModelAdmin):
    pass


class BusAdmin(admin.ModelAdmin):
    pass


class BusLocAdmin(admin.ModelAdmin):
    pass


admin.site.register(Route, RouteAdmin)
admin.site.register(Bus, BusAdmin)
admin.site.register(BusLoc, BusLocAdmin)
admin.site.register(BPoint)