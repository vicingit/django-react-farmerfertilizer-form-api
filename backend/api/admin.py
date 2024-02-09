from django.contrib import admin
from .models import Farmer, Crop, FarmParcel, ExtensionOfficer

admin.site.register(Farmer)
admin.site.register(Crop)
admin.site.register(FarmParcel)
admin.site.register(ExtensionOfficer)
