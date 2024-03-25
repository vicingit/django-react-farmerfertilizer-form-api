from django.shortcuts import render
import os
import pickle
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# Determine the base directory of the Django project
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Define the path to the RandomForest.pkl file within the static folder
MODEL_FILE_PATH = os.path.join(BASE_DIR, 'static', 'RandomForest.pkl')

# Load the trained model from the pickle file
with open(MODEL_FILE_PATH, "rb") as file:
    classifier = pickle.load(file)

def make_prediction(Temperature, Humidity, Moisture, pH, Nitrogen, Potassium, Phosphorous, Soil_Num, Crop_Num):
    features = [[Temperature, Humidity, Moisture, pH, Nitrogen, Potassium, Phosphorous, Soil_Num, Crop_Num]]
    prediction = classifier.predict(features)
    return prediction[0]

def get_fertilizer_recommendation(request):
    if request.method == 'POST':
        # Get data from the request
        Temperature = float(request.POST.get('Temperature'))
        Humidity = float(request.POST.get('Humidity'))
        Moisture = float(request.POST.get('Moisture'))
        pH = float(request.POST.get('pH'))
        Nitrogen = float(request.POST.get('Nitrogen'))
        Potassium = float(request.POST.get('Potassium'))
        Phosphorous = float(request.POST.get('Phosphorous'))
        Soil_Num = float(request.POST.get('Soil_Num'))
        Crop_Num = float(request.POST.get('Crop_Num'))
        
        
        # Make prediction
        prediction = make_prediction(Temperature, Humidity, Moisture, pH, Nitrogen, Potassium, Phosphorous, Soil_Num, Crop_Num)

        # Return prediction as JSON response
        return JsonResponse({'prediction': prediction})
    elif request.method == 'GET':
        # Handle GET request
        return JsonResponse({'error': 'Method not allowed'}, status=405)
