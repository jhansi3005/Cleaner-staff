import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchImageUrls = async () => {
    try {
      const response = await axios.get('http://localhost:5000/task_images');

      setImageUrls(response.data);
    } catch (error) {
      console.error('Error fetching image URLs:', error);
      toast.error('Error fetching image URLs.');
    }
  };

  useEffect(() => {
    fetchImageUrls();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-7xl w-full p-10 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Uploaded Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageUrls.map((image, index) => (
            <img key={index} src={image.url} alt={`Uploaded ${index}`} className="w-full h-auto rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
