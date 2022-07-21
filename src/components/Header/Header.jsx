import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { FaBars } from 'react-icons/fa'
import { GiTireIronCross } from 'react-icons/gi'
import './Header.css'
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuToggler = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
  }
  return (
    <header className='header header--main'>
      <div className="container">
        <div className="header__wrapper">
          <div className='header__logo'>
            <Link to="/"><img src={Logo} alt=" " /></Link>
          </div>
          <div className='header__nav-wrapper'>
            <div className="header__desktop">
              <ul className="header__nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="services">Services</Link></li>
                <li><Link to="contact">Contact</Link></li>
              </ul>
            </div>
            <div className="header__mobile">
              {toggleMenu ?
                <GiTireIronCross onClick={menuToggler} style={{ color: '#fff' }} />
                :
                <FaBars style={{ color: '#fff' }} onClick={menuToggler} />}
              {
                toggleMenu && (
                  <ul className="header__nav-mobile">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="services">Services</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                  </ul>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header