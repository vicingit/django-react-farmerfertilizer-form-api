import React, { useState } from 'react';
import axios from 'axios';

function FertilizerForm() {
    const [recommendation, setRecommendation] = useState('');
    const [cart, setCart] = useState([]);

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
    const addToCart = (quantity) => {
        const newItem = { recommendation, quantity };
        setCart([...cart, newItem]);
        setRecommendation(''); // Clear recommendation after adding to cart
    };
    return (
        <div className="max-w-md mx-auto p-6 bg-orange-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Get Fertilizer Recommendation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Temperature:</label>
                        <input type="number" name="Temperature" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Humidity:</label>
                        <input type="number" name="Humidity" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Moisture:</label>
                        <input type="number" name="Moisture" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">pH:</label>
                        <input type="number" name="pH" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Nitrogen:</label>
                        <input type="number" name="Nitrogen" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Potassium:</label>
                        <input type="number" name="Potassium" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Phosphorous:</label>
                        <input type="number" name="Phosphorous" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Soil Num:</label>
                        <input type="number" name="Soil_Num" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="flex flex-col bg-orange-100 rounded-md p-2">
                        <label className="block">Crop Num:</label>
                        <input type="number" name="Crop_Num" required className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get Recommendation</button>
            </form>

            {recommendation && (
                <div className="mt-4">
                    <p>Recommended Fertilizer: {recommendation}</p>
                    <div className="flex items-center mt-2">
                        <label className="mr-2">Quantity:</label>
                        <input type="number" min="1" defaultValue="1" className="border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" id="quantityInput" />
                    </div>
                    <button onClick={() => addToCart(document.getElementById('quantityInput').value)} className="bg-green-500 text-white rounded-md py-2 px-4 mt-2 hover:bg-green-600 focus:outline-none focus:bg-green-600">Add to Cart</button>
                </div>
            )}

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Order Fertilizer</h2>
                {/* Order fertilizer content */}
                <div>
                    <h3 className="text-lg font-semibold">Cart</h3>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.recommendation} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FertilizerForm;
