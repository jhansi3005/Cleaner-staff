
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Layout from './Layouts/Layout';



function App() {
 

  return (<BrowserRouter>

<Layout/> 
  <ToastContainer />
  </BrowserRouter>
   
  )
}

export default App
