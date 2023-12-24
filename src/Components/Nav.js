import React from 'react'
import logo from '../icons_assets/Logo.svg'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Reservation from '../Forms/Reservation'
import OrderOnline from './OrderOnline'
import LogIn from '../Forms/LogIn'
import '../App.css'
function Nav() {
  return (
    <div className='fixed'>
       <nav className='nav'>
        <img src={logo} alt='logo'style={{margin:10}}/>
        <ul className='nav-bar'>
            <li>
                <Link to='/' className='nav-list'>Home</Link>
            </li>
            <li>
                <Link to='/about' className='nav-list'>About</Link>
            </li>
            <li>
                <Link to='/menu' className='nav-list'>Menu</Link>
            </li>
            <li>
                <Link to='/reservation' className='nav-list'>Reservation</Link>
            </li>
            <li>
                <Link to='/order-online' className='nav-list'>OrderOnline</Link>
            </li>
            <li>
                <Link to='/log-in' className='nav-list'>Log In</Link>
            </li>
        </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservation' element={<Reservation/>}/>
            <Route path='/order-online' element={<OrderOnline/>}/>
            <Route path='/log-in' element={<LogIn/>}/>
        </Routes>
       
    </div>
  )
}

export default Nav

/* 
   <li>
                    <Link to='/about' className=''>About</Link>
                </li>
                <li>
                    <Link to='/menu' className=''>Menu</Link>
                </li>
                <li>
                    <Link to='/reservation' className=''>Reservation</Link>
                </li>
                <li>
                    <Link to='/order-online' className=''>Order Online</Link>
                </li>
                <li>
                    <Link to='/log-in' className=''>Log in</Link>
                </li>



                 <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/reservation' element={<Reservation/>}/>
            <Route path='/order-online' element={<OrderOnline/>}/>
            <Route path='/log-in' element={<LogIn/>}/>
        </Routes>
*/