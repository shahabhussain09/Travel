import React from 'react'
import '../components/Footer.css'
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from 'react-icons/bi'
const Footer = () => {
  return (
    <div className='footer'>
     <div className='top'>
        <div>
            <h1>Trippy</h1>
            <p>Choose your Favurite Destination</p>
        </div>
        <div>
            <a href='/'><BiLogoFacebook /></a>
            <a href='/'><BiLogoTwitter /></a>
            <a href='/'><BiLogoInstagram /></a>
            <a href='/'><BiLogoYoutube /></a>
        </div>
     </div>
      <div className='bottom'>
       <div>
       <h4>Project</h4>
        <a href='/'>Changelog</a>
        <a href='/'>Status</a>
        <a href='/'>License</a>
        <a href='/'>All Version</a>
       </div>

       <div>
       <h4>Community</h4>
        <a href='/'>Githup</a>
        <a href='/'>Issue</a>
        <a href='/'>Project</a>
        <a href='/'>Twitter</a>
       </div>

       <div>
       <h4>Help</h4>
        <a href='/'>Sports</a>
        <a href='/'>Troubleshoting</a>
        <a href='/'>Contact Us</a>
       </div>

       <div>
       <h4>Other</h4>
        <a href='/'>Term</a>
        <a href='/'>Services</a>
        <a href='/'>Lincences</a>
       </div>
      </div>
    </div>
  )
}

export default Footer