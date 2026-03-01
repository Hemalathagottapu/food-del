import React from 'react'
import './footer.css'
import { assets as Adminassets } from '../../../assets/food_assets/admin_assets/assets'
import { assets as frontendassets } from '../../../assets/food_assets/frontend_assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={Adminassets.logo} alt="" />
                <p>FoodieHub is your go-to destination for delicious meals delivered fresh and fast. 
                    We bring you a diverse menu crafted with premium ingredients and unmatched taste.</p>
                    <div className="footer-social-icons">
                        <img src={frontendassets.facebook_icon} alt="" />
                        <img src={frontendassets.twitter_icon} alt="" />
                        <img src={frontendassets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-212-456-7899</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copy-write">
            © 2026 FoodieHub. Crafted with ❤️ for food lovers everywhere.
        </p>
      
    </div>
  )
}

export default Footer
