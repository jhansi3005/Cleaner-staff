import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthContext } from '../../context/AuthContext';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const validateInputs = () => {
    const { username, password } = user;
    let isValid = true;

    // Clear previous errors
    toast.dismiss(); 

    if (!username) {
      toast.error("Username is required.");
      isValid = false;
    }
    if (!password) {
      toast.error("Password is required.");
      isValid = false;
    }
    // if (password.length < 6) {
    //   toast.error("Password must be at least 6 characters long.");
    //   isValid = false;
    // }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/login', {
        UserName: user.username,
        Password: user.password,
      });

      console.log("Response:", response);
      const data = response.data.user;
      localStorage.setItem("app-User", JSON.stringify(data));

      setAuthUser(data);

      let d = new Date();
      d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
      let expires = "expires=" + d.toUTCString();
      document.cookie = "jwt=" + data.token + ";" + expires + ";path=/";

      if (response) {
        toast.success("Successfully Logged In");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign in
            </h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input 
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
                    type="text" 
                    placeholder="Username" 
                  />
                  <input 
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" 
                    type="password" 
                    placeholder="Password" 
                  />
                  <button 
                    type='submit' 
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    disabled={loading}
                  >
                    <span className="ml-3">
                      {loading ? "Signing In..." : "Sign In"}
                    </span>
                  </button>

                  <div className="text-center mt-2">
                    <Link to="/Registration">
                      <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800">
                        Don't have an account? Sign Up
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <img src="https://cdn.vectorstock.com/i/500p/45/52/senior-woman-cleaning-house-with-vacuum-cleaner-vector-51144552.jpg" alt="" />
        </div>
      </div>
      {/* ToastContainer should be included in the render */}
      <ToastContainer />
    </div>
  );
};

export default Login;
