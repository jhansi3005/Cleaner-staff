import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';

const Shorting = () => {

    const [ratings, setRatings] = useState([]);
    console.log(ratings);

    useEffect(() => {
        fetch('http://localhost:5000/ratings')
            .then(response => response.json())
            .then(data => setRatings(data))
            .catch(error => console.error('Error fetching ratings:', error));
    }, []);

    const handleRatingSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/rating_insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Rating: rating, Review: textdata })
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert('Failed to submit rating');
            }
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };

    return (
       

            <div className="mt-8 sm:max-w-xl sm:mx-auto">
                <h3 className="text-gray-800 text-2xl font-semibold">Ratings</h3>
                <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg mt-4 p-4">
                    {ratings.map((rating) => (
                        <div key={rating.Task_Id} className="p-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <ReactStars
                                    count={5}
                                    size={40}
                                    value={rating.Rating}
                                    edit={false}
                                />
                                <span className="ml-2 text-gray-700">{rating.Rating}</span>
                            </div>
                            <p className="text-gray-500">{rating.Review}</p>
                        </div>
                    ))}
                </div>
            </div>
      
    );
};

export default Shorting;