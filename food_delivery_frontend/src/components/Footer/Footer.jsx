import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt="" />
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus mollitia, dolores inventore aut assumenda dignissimos est eum nobis rem reprehenderit saepe. Perferendis, beatae unde! Voluptatem doloribus dolorum harum deleniti?</p>
                  <div className="footer-social-media">
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>
              <div className="footer-content-right">
                  <h2>Get in touch</h2>
                  <ul>
                    <li>+44-7979-180-326</li>
                    <li>onikunle03@gmail.com</li>
                  </ul>
              </div>
              <div className="footer-content-center">
                  <h2>Company</h2>
                  <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                  </ul>
              </div>
          </div>
          <hr />
          <p className="footer-copyright">Copyright 2024 &copy; Gravity.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer