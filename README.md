# 🌱 Fertilizer Recommendation System

An integrated web application that provides fertilizer recommendations based on environmental conditions like temperature, humidity, soil type, and crop type. The system uses a **React** frontend and a **Django** backend, with a prediction logic script (`predict.py`).

---

## 🧠 How It Works

1. The user fills out a form in the **React frontend** with environmental data:
   - Temperature
   - Humidity
   - Moisture
   - Soil Type
   - Crop Type
2. On submission, a **POST** request is sent to the **Django backend**.
3. The backend processes the data using logic defined in `predict.py` to generate a fertilizer recommendation.
4. The response is sent back to the frontend and displayed to the user.

---

## ⚙️ Tech Stack

| Layer     | Technology   |
|-----------|--------------|
| Frontend  | React (JavaScript) |
| Backend   | Django (Python)    |
| API       | REST (Django REST Framework) |
| ML Logic  | Custom script (`predict.py`) |
| Communication | Axios or Fetch API |

---

## 🛠️ Installation & Setup

### 🔙 Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


### 🔙 Frontend
cd frontend
npm install
npm start