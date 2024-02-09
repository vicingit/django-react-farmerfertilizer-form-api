from django.db import models
from django.contrib.gis.db import models as gis_models

class ExtensionOfficer(models.Model):
    officerid = models.IntegerField(primary_key=True)  # Manually entered primary key
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    contact = models.BigIntegerField()

    def __str__(self):
        return self.name

class Farmer(models.Model):
    farmerid = models.IntegerField(primary_key=True)  # Manually entered primary key
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    contact = models.BigIntegerField()
    registeredby = models.ForeignKey('ExtensionOfficer', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class FarmParcel(models.Model):
    parcelid = models.AutoField(primary_key=True)  # AutoField for parcelid
    farmer = models.ForeignKey('Farmer', on_delete=models.CASCADE)
    coordinates = gis_models.PointField()
    size = models.FloatField()
    temperature = models.FloatField()
    humidity = models.FloatField()
    moisture = models.FloatField()
    soiltype = models.CharField(max_length=50)
    ph = models.FloatField()
    nitrogenlevel = models.FloatField()
    potassiumlevel = models.FloatField()
    phosphoruslevel = models.FloatField()

    def __str__(self):
        return f"Parcel ID: {self.parcelid}, Farmer: {self.farmer.name}"

class Crop(models.Model):
    cropid = models.AutoField(primary_key=True)  # AutoField for cropid
    cropname = models.CharField(max_length=100)

    def __str__(self):
        return self.cropname
