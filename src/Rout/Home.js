import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import DestinationData from '../components/DestinationData'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
      cName= 'hero'
      heroImg='https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
      title='Your Journry Your Destination'
      text='Choose your favurite Destination'
      url='/'
      buttonText='Travel Plane'
      buttonClass='show'
      />
      <Destination />
      <DestinationData />
      <Trip />
      <Footer />
    </div>
  )
}

export default Home