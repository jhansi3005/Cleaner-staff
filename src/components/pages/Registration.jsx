import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    PhoneNumber: "",
    Gender: "",
    Age: "",
    Department: "",
    Role: "Employee",
    Supervisor: "",
    UserName: "",
    Password: "",
    confirmPassword: "",
  });

  const validateInputs = () => {
    const { firstName, lastName, PhoneNumber, Gender, Age, Department, Role, Supervisor, UserName, Password, confirmPassword } = inputs;

    if (!firstName || !lastName) {
      toast.error("First Name and Last Name are required.");
      return false;
    }
    // if (!PhoneNumber.match(/^\+91\s\d{10}$/)) {
    //   toast.error("Phone Number must be in the format +91 8765423456.");
    //   return false;
    // }
    if (!Gender) {
      toast.error("Gender is required.");
      return false;
    }
    if (!Age || Age < 18) {
      toast.error("Valid Age is required and must be 18 or above.");
      return false;
    }
    if (!Department) {
      toast.error("Department is required.");
      return false;
    }
    if (Role === "Employee") {
      if (!Supervisor) {
        toast.error("Supervisor ID is required for the Supervisor role.");
        return false;
      }
      if (isNaN(Supervisor)) {
        toast.error("Supervisor ID must be a number.");
        return false;
      }
    }
    if (!UserName) {
      toast.error("User Name is required.");
      return false;
    }
    if (!Password || Password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    if (Password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Successfully Registered");
        setTimeout(()=>
        {
          navigate('/login');
        },"2000")
         // Navigate to the login page after successful registration
      } else {
        console.error('Registration failed:', result);
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <div className="h-full w-full bg-gray-400 dark:bg-gray-900">
      <ToastContainer />
      <div className="mx-auto">
        <div className="flex justify-center px-1 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-[length:500px_900px] rounded-l-lg"
              style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/05/78/61/03/360_F_578610304_3AxU7UsNrKyxj0IlgukFpLgX3I9EftX4.jpg')" }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      value={inputs.firstName}
                      onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={inputs.lastName}
                      onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    value={inputs.PhoneNumber}
                    onChange={(e) => setInputs({ ...inputs, PhoneNumber: e.target.value })}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="gender">
                      Gender
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="gender"
                      value={inputs.Gender}
                      onChange={(e) => setInputs({ ...inputs, Gender: e.target.value })}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="age">
                      Age
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="age"
                      type="number"
                      placeholder="Age"
                      value={inputs.Age}
                      onChange={(e) => setInputs({ ...inputs, Age: e.target.value })}
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="department">
                      Department
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="department"
                      value={inputs.Department}
                      onChange={(e) => setInputs({ ...inputs, Department: e.target.value })}
                    >
                      <option value="">Select Department</option>
                      <option value="Cleaner">Cleaner</option>
                      <option value="Painter">Painter</option>
                      <option value="Wiper">Wiper</option>
                    </select>
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="role">
                      Role
                    </label>
                    <select
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="role"
                      value={inputs.Role}
                      onChange={(e) => setInputs({ ...inputs, Role: e.target.value })}
                    >
                      <option value="Employee">Employee</option>
                      <option value="Supervisor">Supervisor</option>
                    </select>
                  </div>
                </div>
                {inputs.Role === "Employee" && (
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="supervisor">
                      Supervisor ID
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="supervisor"
                      type="number"
                      placeholder="Supervisor ID"
                      value={inputs.Supervisor}
                      onChange={(e) => setInputs({ ...inputs, Supervisor: e.target.value })}
                      min="0"
                    />
                  </div>
                )}
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="userName">
                    User Name
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="userName"
                    type="text"
                    placeholder="User Name"
                    value={inputs.UserName}
                    onChange={(e) => setInputs({ ...inputs, UserName: e.target.value })}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={inputs.Password}
                      onChange={(e) => setInputs({ ...inputs, Password: e.target.value })}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      value={inputs.confirmPassword}
                      onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white  bg-indigo-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/login">
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
