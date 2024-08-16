

import React from 'react';
import { useAuthContext } from '../../context/AuthContext';

const ProfileSection = () => {
    const { authUser } = useAuthContext();
   
    console.log(authUser);
  return (
    <section className="relative pt-40 pb-24">
     <img src="https://pagedone.io/asset/uploads/1705473908.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60" />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center flex-col justify-center sm:justify-start relative z-10 mb-5">
          <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar-image"
            className="border-4 border-solid border-white rounded-full" />
            <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
          <div className="block">
            <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">{authUser.FirstName}</h3>
         
          </div>
        </div>
        </div>

        {/* Section for additional information */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center">
               <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
               <span className="text-gray-700">Phone:<span>{authUser.PhoneNumber} </span> </span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
             <span className="text-gray-700">Gender:<span>{authUser.Gender} </span></span>
            </div>
           <div className="flex items-center">
           <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
            </svg>
             <span className="text-gray-700">Age:<span>{authUser.Age}</span></span>
             </div>
            <div className="flex items-center">
            <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>

               <span className="text-gray-700">Occupation:Painter</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
               <span className="text-gray-700">Rating: 4.8/5</span>
            </div>
           <div className="flex items-center">
             <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span className="text-gray-700">Experience: 5 years</span>
         </div>
          
          </div>
        </div>


        {/* New section for Task Done and Pending Task */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
          <div className="w-full sm:w-1/2 h-40 flex flex-col justify-center items-center rounded-lg bg-slate-500 text-white">
            <p className='text-2xl font-bold'>Task Done</p>
            <span className='text-4xl pt-2 font-semibold'>2</span>
          </div>
          <div className="w-full sm:w-1/2 h-40 flex flex-col justify-center items-center rounded-lg bg-blue-400 text-white">
            <p className='text-2xl font-bold'>Pending Task</p>
            <span className='text-4xl pt-2 font-semibold'>3</span>
          </div>
        </div>

        
      </div>
    </section>
  );
};



export default ProfileSection;