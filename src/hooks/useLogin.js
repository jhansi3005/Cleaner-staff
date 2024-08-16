import { useState } from "react";
// import { toast } from 'react-toastify';
// import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	// const { setAuthUser } = useAuthContext();
 
	const login = async ({username, password}) => {
		const success = handleInputErrors({username, password});
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("http://localhost:5000/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			console.log(data)
			if (data.error) {
				throw new Error(data.error);
			}
			let d = new Date();
    		d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
    		let expires = "expires=" + d.toUTCString();
    		document.cookie = "jwt" + "=" + data.token + ";" + expires + ";path=/";
			// localStorage.setItem("Bus-User", JSON.stringify(data));
			
			// setAuthUser(data);
			toast.success("Successfully Logged In");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors({username, password}) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
}
