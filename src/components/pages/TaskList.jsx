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

const handleApproveTask = (taskId) => {
    console.log(taskId)
axios.post('http://localhost:5000/tasks/approve',{taskId})
.then(response => {
// Update local state with the new status

setTasks(tasks.map(task =>
task.Task_Id === taskId ? { ...task, Task_Status: 'Approved' } : task
));
})
.catch(error => {
console.error('Error approving task:', error);
setError('Error approving task.');
});
};

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;

return (
<div className="p-4 bg-blue-100 min-h-screen">
<h2 className="text-2xl font-bold mb-6 text-gray-800">Status of an Employee</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{tasks.map(task => (
<div key={task.Task_Id} className="bg-white p-4 rounded-lg shadow-md">
<h3 className="text-xl font-bold mb-2">{task.Task_Name}</h3>
<p className="text-gray-700 mb-2"><strong>Description:</strong> {task.Task_Description}</p>
<p>Status: {task.Task_Status}</p>
{task.Task_Status === 'Waiting for approval' && (
<button
className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-700"
onClick={() => handleApproveTask(task.Task_Id)}
>
Approve
</button>
)}
</div>
))}
</div>
</div>
);
};
export default TaskList;