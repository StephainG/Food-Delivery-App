import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
    const [list, setList] = useState('home')
  return (
      <div className='navbar'>
          <h3>GRAVITY</h3>
          <ul className='navbar-list'>
              <li onClick={()=>setList('home')} className={list === 'home' ? 'active' : ""}>Home</li>
              <li onClick={()=>setList('menu')} className={list === 'menu' ? 'active' : ""}>Menu</li>
              <li onClick={()=>setList('mobile app')} className={list === 'mobile app' ? 'active' : ""}>Mobile app</li>
              <li onClick={()=>setList('contact us')} className={list === 'contact us' ? 'active' : ""}>Contact us</li>
          </ul>
          <div className="navbar-right">
              <img src={assets.search_icon} alt="" className="search" />
              <div className="navbar_basket_icon">
                  <img src={assets.basket_icon} alt="" className="navbar_basket" />
                  <div className="dot"></div>
              </div>
              <button>Sign in</button>
          </div>
    </div>
  )
}

export default Navbar