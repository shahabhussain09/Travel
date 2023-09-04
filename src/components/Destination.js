import React from 'react'
import '../components/Des-style.css'
const Destination = () => {
  return (
    <div className='destination'>
     <h1>Popular Destination</h1>
     <p  className='text'>Tours give you the oppurtunity to see alot with in a frame time</p>

     <div className='first-des'>
      <div className='des-text'>
        <h2>Tall Volcano Batangas</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className='img'>
        <img src='https://plus.unsplash.com/premium_photo-1661855008340-568256682523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2023&q=80' alt='image' />
        <img src='https://plus.unsplash.com/premium_photo-1664358190450-2d84d93b9546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='image' />
      </div>
     </div>
    </div>
  )
}

export default Destination