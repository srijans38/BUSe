from django.db import models

routes_full = { 
    "A" : "Airport",
    "D" : "Durg",
    "R" : "Raipur Jn"
}

d = "DEF"

class Route(models.Model):
    source = models.CharField(max_length=1)
    destination = models.CharField(max_length=1)

    def __str__(self):
        return f"{routes_full.get(self.source, d)} to {routes_full.get(self.destination, d)}"

class Bus(models.Model):
    bno = models.CharField(max_length=10)
    driver = models.TextField()
    conducter = models.TextField()
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    status = models.IntegerField()

    def __str__(self):
        return f"{self.bno[:2]} {self.bno[2:4]} {self.bno[4:6]} {self.bno[6:]}"

class BusLoc(models.Model):
    bus = models.OneToOneField(Bus, on_delete=models.CASCADE)
    lat = models.FloatField()
    long = models.FloatField()

    def __str__(self):
        return f"Bus No : {self.bus.bno}"
