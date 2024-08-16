import { useState } from "react";
import { toast } from 'react-toastify';


const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [navigation, setNavigation] = useState(false);
  // const { setAuthUser } = useAuthContext();

  const signup = async ({ firstName, lastName, phoneNumber, gender, age, department, supervisor, userName, password, confirmPassword }) => {
    const success = handleInputErrors({ firstName, lastName, phoneNumber, gender, age, department, supervisor, userName, password, confirmPassword });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/auth/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, phoneNumber, gender, age, department, supervisor, userName, password, confirmPassword }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // localStorage.setItem("Bus-User", JSON.stringify(data));
      // setAuthUser(data);
      toast.success("Successfully Registered");
      setNavigation(true);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup, navigation };
};

export default useSignup;

function handleInputErrors({ firstName, lastName, phoneNumber, gender, age, department, supervisor, userName, password, confirmPassword }) {
  if (!firstName || !lastName || !phoneNumber || !gender || !age || !department || !supervisor || !userName || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    console.log('ERROR');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  // Additional checks (e.g., phone number format, age range, etc.) can be added here

  return true;
}
