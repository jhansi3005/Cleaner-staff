import React from 'react';
import { Route, Routes } from "react-router-dom";

import Superviser from '../components/pages/Superviser.jsx';
;
const Routing = () => {

  return (
  

    <Routes>
       
        <Route path='/' element={<Superviser/> } />
	
  

    </Routes>
  
    
    

  )
}

export default Routing
