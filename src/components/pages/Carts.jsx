import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // Fetch tasks from the API
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setError('Error fetching tasks.');
        setLoading(false);
      });
  }, []);

  const handleCompleteTask = ( Task_Id) => {
    axios.post(`http://localhost:5000/Task_status`, {  Task_Id })
      .then(response => {
        // Update the task status locally
        setTasks(prevTasks => prevTasks.map(task =>
          task. Task_Id ===  Task_Id ? { ...task, Task_Status: 'Waiting For Approval' } : task
        ));
        console.log(`Task ${ Task_Id} marked as complete.`);
      })
      .catch(error => {
        console.error('Error updating task:', error);
        setError('Error updating task.');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4 bg-blue-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Tasks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(task => (
          <div key={task.Task_Id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{task.Task_Name}</h3>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {task.Task_Description}</p>
            <p className="text-gray-700 mb-2"><strong>Assigned By:</strong> {task.Assigned_By}</p>
            <p className="text-gray-700 mb-2"><strong>Assigned To:</strong> {task.Assigned_TO}</p>
            <p className="text-gray-700 mb-2"><strong>Start Date:</strong> {new Date(task.Start_Date).toLocaleString()}</p>
            <p className="text-gray-700 mb-2"><strong>Due Hours:</strong> {task.Due_Hours}</p>
            <p className="text-gray-700 mb-2"><strong>Status:</strong> {task.Task_Status}</p>
            <button 
              className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-700"
              onClick={() => handleCompleteTask(task.Task_Id)}
              disabled={task.Task_Status === 'Completed'}
            >
              {task.Task_Status === 'Completed' ? 'Completed' : 'Complete Task'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
