import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useAuthContext } from "../context/AuthContext";
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
     
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/logout');
       
       console.log("click");
     
      
      console.log('click');
      localStorage.removeItem("app-User");
      const pastDate = new Date(0); // Create a date in the past
      console.log(pastDate);
      document.cookie = 'jwt=; expires=' + pastDate.toUTCString() + '; path=/'; // Replace 'myCookieName' with your cookie name
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
