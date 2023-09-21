import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/aslam-image.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Aslam Dhikrullahi</h1>
        <h5 className="text-light">Product Designer & Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#portfolio" className='scroll__down'>Portfolio</a>
      </div>
    </header>
  )
}

export default Header