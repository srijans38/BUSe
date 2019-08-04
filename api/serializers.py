from bdata.models import BusLoc, Bus
from rest_framework import serializers

class BusLocSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusLoc
        fields = ['url','bus', 'lat', 'long']