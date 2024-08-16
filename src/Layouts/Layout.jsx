import React from 'react'
import Footer from '../components/Header/Footer'
import Navbar from '../components/Header/Navbar'
import Routing from '../routes/Routing'
// import Footer from '../components/Footer'
const Layout = () => {

  return (
    <>
  
     <div className='flex flex-col   items-stretch  '>
     <Navbar />
    <div>
      <Routing />
    </div >
    <div className='h-100 align-bottom'>
    <Footer />
    </div>
  </div>
  
  </>
  )
}

export default Layout
