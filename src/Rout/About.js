import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
const About = () => {
  return (
    <div>
 <Navbar />
      <Hero
      cName= 'hero-mid'
      heroImg='https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
      title='About'
      buttonClass='hide'
      />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About