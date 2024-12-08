import React from 'react'
import './Header.css'
import logo from '../../assets/templa8te.webp'
import { Link } from 'react-router-dom'

import search_icon from '../../assets/search.png'
import cart_icon from '../../assets/shopping-bag.png'
import profile_icon from '../../assets/user-circle.png'
import notification_icon from '../../assets/frame.png'

const Header = () => {


  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Shop</li>
        <li>Categories</li>
        <li>Discover</li>
        <li>Contact Us</li>   
      </ul>
      <div className="header-icons">
        <img src={search_icon} alt="" className="search-icon icon" />
        <img src={profile_icon} alt="" className="profile-icon icon" />
        <img src={cart_icon} alt="" className="cart-icon icon" />
        <img src={notification_icon} alt="" className="notification-icon icon" />
      </div>
    </div>
  )
}

export default Header