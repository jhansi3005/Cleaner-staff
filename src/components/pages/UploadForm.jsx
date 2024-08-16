import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'bikash_nl'); // replace with your upload preset
    formData.append('cloud_name', 'dzxu5pimk'); // corrected line

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dzxu5pimk/image/upload', formData);
      const imageUrl = response.data.url;
      console.log(imageUrl);
      // Send imageUrl to your backend
      const taskData = {
        imageUrl: imageUrl,
      };

      const backendResponse = await axios.post('http://localhost:5000/task_image', taskData);

      if (backendResponse.status === 200) {
        toast.success('Task submitted successfully!');
      } else {
        toast.error('Failed to submit task. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error uploading image.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)" }}>
      <ToastContainer />
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">
            Task Submit Form
          </h2>
        </div>
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-l font-bold text-black-500 tracking-wide">Task ID : 2321</label>
            <label className="text-l font-bold text-black-500 tracking-wide">Task Title : Cleanup Floor</label>
            <label className="text-l font-bold text-black-500 tracking-wide">Supervisor: Bikash</label>
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center">
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <img className="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                  </div>
                  <p className="pointer-none text-gray-500 "></p>
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: doc,pdf,types of images</span>
          </p>
          <div>
            <button type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
