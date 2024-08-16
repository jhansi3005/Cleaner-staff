import axios from 'axios';
import React, { useState } from 'react';

const RequestResource = ({ onSubmit }) => {
  const [Req_name, setReq_name] = useState('');
  const [Req_Description, setReq_Description] = useState('');
  const [Req_From, setReq_From] = useState('');
  const [Req_To, setReq_To] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
        Req_name: Req_name,
      Req_Description: Req_Description,
      Req_From: Req_From,
      Req_To:Req_To
    };

    try {
      const response = await axios.post('http://localhost:5000/request', taskData);
      console.log('Server response:', response.data);
      onSubmit(taskData); // Call the onSubmit prop if necessary
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-blue-300 overflow-y-scroll shadow">
      <div className="m-10">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Request For Resources</h2>

          <div className="mb-4">
            <label htmlFor="taskName" className="block text-gray-700 font-bold mb-2">Request Name</label>
            <input
              type="text"
              id="taskName"
              value={Req_name}
              onChange={(e) => setReq_name(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="taskDescription" className="block text-gray-700 font-bold mb-2">Request Description</label>
            <textarea
              id="taskDescription"
              value={Req_Description}
              onChange={(e) => setReq_Description(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="assignedBy" className="block text-gray-700 font-bold mb-2">Request From</label>
            <input
              type="text"
              id="assignedBy"
              value={Req_From}
              onChange={(e) => setReq_From(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="assignedBy" className="block text-gray-700 font-bold mb-2">Request To</label>
            <input
              type="text"
              id="assignedBy"
              value={Req_To}
              onChange={(e) => setReq_To(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Request Recource</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestResource;
