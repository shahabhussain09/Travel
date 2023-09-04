import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
const Services = () => {
  return (
    <div>
       <Navbar />
      <Hero
      cName= 'hero-mid'
      heroImg='https://images.unsplash.com/photo-1615561916422-7014e1078997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      title='Services'
      buttonClass='hide'
      />
      <Trip />
      <Footer />
    </div>
  )
}

export default Services