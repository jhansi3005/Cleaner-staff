import axios from 'axios';
import React, { useState } from 'react';
import ReactStars from 'react-stars';
import { toast } from 'react-toastify';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [Review, setReview] = useState('');

  console.log(rating);

  const handleSubmit = () => {
    axios.post('http://localhost:5000/rating_insert', { rating, Review })
      .then(response => {
        toast.success('Rating submitted successfully');
      })
      .catch(error => {
        toast.error('Error submitting rating');
      });
  };

  return (
    <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
          <div className="px-12 py-5">
            <h2 className="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
          </div>
          <div className="bg-gray-200 w-full flex flex-col items-center">
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-lg text-gray-800">How was quality of the call?</span>
              <div className="flex space-x-3 items-center">
                <ReactStars
                  count={5} // Number of stars
                  size={40} // Size of the stars
                  half={true} // Allow half stars
                  value={rating} 
                  onChange={(rate) => setRating(rate)} // Initial value (set to 0 or any default)
                  edit={true} // Allow editing
                />
              </div>
            </div>
            <div className="w-3/4 flex flex-col">
              <textarea 
                rows="3" 
                className="p-4 text-gray-500 rounded-xl resize-none" 
                placeholder="Leave a message, if you want"
                value={Review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
              <button 
                onClick={handleSubmit} 
                className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
              >
                Rate now
              </button>
             
            </div>
          </div>
          <div className="h-20 flex items-center justify-center">
            <a href="#" className="text-gray-600">Maybe later</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
