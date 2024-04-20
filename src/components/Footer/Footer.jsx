import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>TableTalk: Your compass to culinary delights! Discover personalized restaurant recommendations tailored to your tastes. Whether you're craving exotic flavors, cozy cafes, or upscale elegance, TableTalk guides you to the perfect dining experience. Explore insightful reviews, tantalizing menus, and vibrant photos to inspire your next culinary adventure. Let TableTalk be your trusted companion in the world of food exploration. Start the conversation and savor every moment with TableTalk.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+7-451-536-467</li>
                <li>contact@TableTalk.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © TableTalk.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
