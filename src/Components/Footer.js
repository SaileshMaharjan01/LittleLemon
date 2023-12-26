import React from 'react'
import logo from '../icons_assets/Logo .svg'
import {Link} from 'react-router-dom'
import '../App.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='forlogo'>
            <img src={logo} alt="footerlogo" className='footerlogo'/>
        </div>
        <div className='fordoormat'>
            <ul className='fordoormat'>
                <li className=''>
                    <Link to='/' className='footer-nav'>Home</Link>
                </li>
                <li className=''>
                    <Link to='/about' className='footer-nav'>About</Link>
                </li>
                <li className=''>
                    <Link to='/menu' className='footer-nav'>Menu</Link>
                </li>
                <li className=''>
                    <Link to='/reservation' className='footer-nav'>Reservation</Link>
                </li>
                <li className=''>
                    <Link to='/order-online' className='footer-nav'>Order online</Link>
                </li>
                <li className=''>
                    <Link to='/log-in' className='footer-nav'>Log In</Link>
                </li>
            </ul>
        </div>
        <div className='forcontact'>
            <ul className='fordoormat'>
                <li className='footer-nav'>
                    <h2>Contact</h2>
                </li>
                <li className='footer-nav'>
                    Address
                </li>
                <li className='footer-nav'>
                   Phone number
                </li>
                <li className='footer-nav'>
                    Email
                </li>
            </ul>
        </div>
        <div className='foraddress'>
        <ul className='fordoormat'>
                <li className='footer-nav'>
                    <h2>Address</h2>
                </li>
                <li className='footer-nav'>
                    Address
                </li>
                <li className='footer-nav'>
                   Phone number
                </li>
                <li className='footer-nav'>
                    Email
                </li>
            </ul>
        </div>
    </footer>

  )
}
