import React from 'react'
import Footer from '../components/Header/Footer'
import Routing2 from '../routes/Routing2'
// import Footer from '../components/Footer'
const Layout = () => {

  return (
    <>
  
     <div>
     <Navbar />
    <div>
      <Routing2 />
    </div >
    <div className='h-100'>
    <Footer />
    </div>
  </div>
  
  </>
  )
}

export default Layout