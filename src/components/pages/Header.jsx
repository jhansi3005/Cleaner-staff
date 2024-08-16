import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function handleTasks() {
        navigate("/Carts");
    }

    function handleForm() {
        navigate("/RequestResource");
    }
    function handleTaskForm(){
        navigate("/TaskForm");
    }
    return (
        <div className="flex justify-between items-center bg-blue-900 p-4">
            <input
                type="text"
                className="rounded-full p-4 text-gray-700 leading-tight border-2 border-black w-1/5"
                id="search"
                placeholder="Search"
            />
            <div className="flex space-x-5">
                <button
                    onClick={handleTasks}
                    className="p-4 bg-white text-black font-bold rounded hover:bg-blue-500"
                >
                    Tasks
                </button>
                <button
                    onClick={handleForm}
                    className="px-4 py-1 bg-white text-black font-bold rounded hover:bg-blue-500"
                >
                    Request Resource
                </button>
                <button
                    onClick={handleTaskForm}
                    className="p-4 bg-white text-black font-bold rounded hover:bg-blue-500"
                >
                    TaskForm
                </button>
            </div>
        </div>
    );
}

export default Header;
