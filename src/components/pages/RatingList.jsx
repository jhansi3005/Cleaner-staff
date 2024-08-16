import React, { useEffect, useState } from 'react';
import Showrating from './Showrating'; // Import the Showrating component

const RatingList = () => {
const [ratings, setRatings] = useState([]);

useEffect(() => {
// Fetch ratings data from backend
fetch('http://localhost:5000/rating_insert')
.then(response => response.json())
.then(data => setRatings(data))
.catch(error => console.error('Error fetching ratings:', error));
}, []);

return (
<div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
<div className="py-3 sm:max-w-xl sm:mx-auto">
<div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg p-6">
<h2 className="text-gray-800 text-3xl font-semibold mb-4">Ratings</h2>
<div className="flex flex-wrap justify-center">
{ratings.map((rating) => (
<Showrating
key={rating.Task_Id} // Unique key for each rating
rating={rating.Rating}
review={rating.Review}
/>
))}
</div>
</div>
</div>
</div>
);
};

export default RatingList;