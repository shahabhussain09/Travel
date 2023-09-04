import React from 'react'
import '../components/hero.css'

const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
        < img className='image' src={props.heroImg} alt='hero' />

        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a className={props.buttonClass} href={props.url}>{props.buttonText}</a>
        </div>
    </div>
    </>
  )
}

export default Hero