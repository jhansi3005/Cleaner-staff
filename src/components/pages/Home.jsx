import React from 'react'

const Home = () => {
  return (
<div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
    <header className="bg-blue-600 w-full py-6">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Our Cleaning Service</h1>
        <p className="mt-4 text-lg">Professional and Reliable Cleaning Services for Your Home and Office</p>
      </div>
    </header>
    <main className="flex-grow container mx-auto px-6 py-12">
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
        <p className="mt-4 text-gray-600">We offer a wide range of cleaning services to meet your needs.</p>
      </section>
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-blue-600">Residential Cleaning</h3>
          <p className="mt-2 text-gray-600">Keep your home clean and tidy with our professional residential cleaning services.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-blue-600">Office Cleaning</h3>
          <p className="mt-2 text-gray-600">Maintain a clean and healthy work environment with our office cleaning services.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-blue-600">Specialty Cleaning</h3>
          <p className="mt-2 text-gray-600">From carpet cleaning to window washing, we offer specialty cleaning services.</p>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Home
