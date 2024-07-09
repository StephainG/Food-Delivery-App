import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [list, setList] = useState('home')
    const { getTotalAmountInCart } = useContext(StoreContext)
    
  return (
      <div className='navbar'>
          <Link to='/'><h3>GRAVITY</h3></Link>
          <ul className='navbar-list'>
              <Link to='/' onClick={()=>setList('home')} className={list === 'home' ? 'active' : ""}>Home</Link>
              <a href='#menu' onClick={()=>setList('menu')} className={list === 'menu' ? 'active' : ""}>Menu</a>
              <a href='#app-download' onClick={()=>setList('mobile app')} className={list === 'mobile app' ? 'active' : ""}>Mobile app</a>
              <a href='#footer' onClick={()=>setList('contact us')} className={list === 'contact us' ? 'active' : ""}>Contact us</a>
          </ul>
          <div className="navbar-right">
              <img src={assets.search_icon} alt="" className="search" />
              <div className="navbar_basket_icon">
                  <Link to='/cart'><img src={assets.basket_icon} alt="" className="navbar_basket" /></Link>
                  <div className={getTotalAmountInCart() === 0 ? "" : 'dot'}></div>
              </div>
              <button onClick={()=> setShowLogin(true)}>Sign in</button>
          </div>
    </div>
  )
}

export default Navbar