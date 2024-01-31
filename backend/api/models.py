from django.db import models

class Fertilizer(models.Model):
    name = models.CharField(max_length=100)
    temperature = models.FloatField()
    humidity = models.FloatField()
    moisture = models.FloatField()
    nitrogen = models.FloatField()
    phosphorus = models.FloatField()
    potassium = models.FloatField()
    soil_number = models.IntegerField()
    crop_number = models.IntegerField()

    def __str__(self):
        return self.name
