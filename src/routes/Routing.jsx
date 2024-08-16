import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Carts from '../components/pages/Carts';
import EmployeeDetails from '../components/pages/EmployeeDetails';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import ProfileSection from '../components/pages/ProfileSection';
import Rating from '../components/pages/Rating';
import Registration from '../components/pages/Registration';
import RequestResource from '../components/pages/RequestResource';
import Shorting from '../components/pages/Shorting';
import TaskForm from '../components/pages/TaskForm';
import UploadForm from '../components/pages/UploadForm';
import TaskList from '../components/pages/TaskList';
import { lazy } from 'react';
import { useAuthContext } from '../context/AuthContext';

const Routing = () => {
  const { authUser } = useAuthContext();
  //lazy feature in react
  const Lazyimage=React.lazy(()=>import('../components/pages/ImageGallery'))

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/home" element={authUser ? <Home /> : <Navigate to="/login" />}/>
      

      {/* Protected Routes */}
      <Route path="/upload" element={ <UploadForm /> } />
      <Route path="/images" element={ <Suspense fallback="Loading ..."><Lazyimage/></Suspense>} />
      <Route path="/taskform" element={authUser ? <TaskForm /> : <Navigate to="/login" />} />
      <Route path="/tasks" element={authUser ? <Carts /> : <Navigate to="/login" />} />
      <Route path="/requirement" element={authUser ? <RequestResource /> : <Navigate to="/login" />} />
      <Route path="/Assigned Task" element={authUser ? <TaskForm /> : <Navigate to="/login" />} />
      <Route path="/rating" element={authUser ? <Shorting /> : <Navigate to="/login" />} />
      <Route path="/profile" element={authUser ? <ProfileSection /> : <Navigate to="/login" />} />
      <Route path="/employee" element={authUser ? <EmployeeDetails /> : <Navigate to="/login" />} />
      <Route path="/ratings" element={authUser ? <Rating /> : <Navigate to="/login" />} />
      <Route path="/taskstatus" element={authUser ? <TaskList/> : <Navigate to="/login" />} />
      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default Routing;
