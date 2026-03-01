import React from 'react'
import './header.css'
import { assets as frontendAssets } from '../../../assets/food_assets/frontend_assets/assets'
import { assets as adminAssets } from '../../../assets/food_assets/admin_assets/assets'
function Header() {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order Your favorite  food here</h2>
        <p>please choose a diverse menu faturing a delectable array of dishes crafte with the finest ingredeints and ...</p>
        <button>View Menu</button>

      </div>
    </div>
  )
}

export default Header
