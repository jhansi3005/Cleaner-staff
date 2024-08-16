import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authUser } = useAuthContext(); // Assuming you have a custom hook for auth

  useEffect(() => {
    // Fetch employees from the API
    axios.post('http://localhost:5000/employee_fetch', { authUserId: authUser.id })
      .then(response => {
        console.log('Response data:', response.data);
        if (response.data && Array.isArray(response.data.requests)) {
          setEmployees(response.data.requests);
        } else {
          setError('Invalid data received from server.');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
        setError('Error fetching employees.');
        setLoading(false);
      });
  }, [authUser.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800">
          Meet Our Team
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8">
        {employees.map(employee => (
          <IDCard key={employee.id} employee={employee} authUser={authUser} />
        ))}
      </div>
    </section>
  );
};

const IDCard = ({ employee, authUser }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
      <div className="flex justify-center mt-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-500">
          <img 
            src={employee.Gender === 'Male'
              ? `https://avatar.iran.liara.run/public/boy?username=${employee.userName}`
              : `https://avatar.iran.liara.run/public/girl?username=${employee.userName}`
            } 
            alt="Profile Picture" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-700">{employee.FirstName} {employee.LastName}</h2>
        <p className="text-gray-500">{employee.jobTitle}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-gray-700">
          <span className="font-semibold">Phone Number:</span>
          <span>{employee.PhoneNumber}</span>
        </div>
        <div className="flex justify-between text-gray-700 mt-2">
          <span className="font-semibold">Gender:</span>
          <span>{employee.Gender}</span>
        </div>
        <div className="flex justify-between text-gray-700 mt-2">
          <span className="font-semibold">Age:</span>
          <span>{employee.Age}</span>
        </div>
        <div className="flex justify-between text-gray-700 mt-2">
          <span className="font-semibold">Department:</span>
          <span>{employee.Department}</span>
        </div>
        <div className="flex justify-between text-gray-700 mt-2">
          <span className="font-semibold">Supervisor:</span>
          <span>{employee.Supervisor}</span>
        </div>
        <div className="flex justify-between text-gray-700 mt-2">
          <span className="font-semibold">Logged In User:</span>
          <span>{authUser ? authUser.name : 'Guest'}</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
