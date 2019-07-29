from django.db import models


class Route(models.Model):
    source = models.CharField(max_length=1)
    destination = models.CharField(max_length=1)

    def __str__(self):
        return f"{self.source} to {self.destination}"


class Bus(models.Model):
    bno = models.CharField(max_length=10)
    driver = models.TextField()
    conducter = models.TextField()
    route = models.ForeignKey(Route, on_delete=models.CASCADE)
    status = models.IntegerField()

    def __str__(self):
        return f"{self.bno[:2]} {self.bno[2:4]} {self.bno[4:6]} {self.bno[6:]}"


class BusLoc(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE)
    lat = models.FloatField()
    long = models.FloatField()

    def __str__(self):
        return f"Bus No : {self.bus.bno}"
