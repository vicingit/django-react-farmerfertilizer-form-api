import pickle

with open("RandomForest.pkl", "rb") as file:
    classifier = pickle.load(file)

def make_prediction(Temperature, Humidity, Moisture, pH, Nitrogen, Potassium, Phosphorous, Soil_Num, Crop_Num):
    features = [[Temperature, Humidity, Moisture, pH, Nitrogen, Potassium, Phosphorous, Soil_Num, Crop_Num]]
    prediction = classifier.predict(features)
    return prediction[0]

Temperature = 26
Humidity = 52
Moisture = 38
pH=5.6
Nitrogen = 37
Potassium = 0
Phosphorous = 0
Soil_Num = 2
Crop_Num = 10

prediction = make_prediction(Temperature, Humidity, Moisture, pH, Nitrogen, Potassium, Phosphorous, Soil_Num, Crop_Num)
print("Predicted fertilizer:", prediction)
