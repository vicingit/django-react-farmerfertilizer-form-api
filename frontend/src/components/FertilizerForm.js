import React, { useState } from 'react';
import axios from 'axios';

function FertilizerForm() {
    const [recommendation, setRecommendation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
            const response = await axios.post('http://localhost:8000/api/fertilizer/', formData);
            setRecommendation(response.data.prediction);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Get Fertilizer Recommendation</h2>
            <form onSubmit={handleSubmit}>
                <label>Temperature:</label>
                <input type="number" name="Temperature" required />
                <label>Humidity:</label>
                <input type="number" name="Humidity" required />
                <label>Moisture:</label>
                <input type="number" name="Moisture" required />
                <label>Nitrogen:</label>
                <input type="number" name="Nitrogen" required />
                <label>Potassium:</label>
                <input type="number" name="Potassium" required />
                <label>Phosphorous:</label>
                <input type="number" name="Phosphorous" required />
                <label>Soil Num:</label>
                <input type="number" name="Soil_Num" required />
                <label>Crop Num:</label>
                <input type="number" name="Crop_Num" required />
                <button type="submit">Get Recommendation</button>
            </form>
            {recommendation && <p>Recommended Fertilizer: {recommendation}</p>}
        </div>
    );
}

export default FertilizerForm;
