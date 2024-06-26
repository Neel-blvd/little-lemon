import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import TableBooking from './components/TableBooking'
import './index.css'

function App() {
  return (
    <div className='bg-gray-600 min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/booking' element={<TableBooking />} />
      </Routes>
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
