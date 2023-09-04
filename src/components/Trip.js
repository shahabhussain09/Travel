import React from 'react'
import '../components/Trip.css'
import TripData from './TripData'
const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trip</h1>
        <p className='text'>You can Descover unique destination using google map</p>
        <div className='tripcard'>
        <TripData
        image= 'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80'
        heading='Tripe in Indonesia'
        text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem'
        />

<TripData
        image= 'https://images.unsplash.com/photo-1619523439722-c27651e8e10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        heading='Tripe in France'
        text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem'
        />

<TripData
        image= 'https://images.unsplash.com/photo-1606995797128-f14378256876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1796&q=80'
        heading='Tripe in Eroupe'
        text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem'
        />
        </div>

    </div>
  )
}

export default Trip