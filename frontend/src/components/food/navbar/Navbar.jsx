import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets as adminAssets } from '../../../assets/food_assets/admin_assets/assets'
import { assets as frontendAssets } from '../../../assets/food_assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext';
function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("menu");
    const{getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
        
    }
    return (
        <div className='Navbar'>
            <Link to='/'><img src={adminAssets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/'onClick={()=>setMenu("home")}className={menu === "home" ? "active" : ""}>home</Link>
                <a href="#explore-menu"onClick={()=>setMenu("menu")}className={menu === "menu" ? "active" : ""}>menu</a>
                <a href="#app-download"onClick={()=>setMenu("mobile-app")}className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href="#footer"onClick={()=>setMenu("contact-us")}className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={frontendAssets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={frontendAssets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()?"":"dot"}></div>
                </div>
                {
                    !token?<button onClick={()=>setShowLogin(true)}>Sign in</button>:
                    <div className='navbar-profile'>
                        <img src={frontendAssets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={()=>navigate("/myorders")}className="dropdown-item"><img src={frontendAssets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr/>
                            <li onClick={logout}className="dropdown-item logout"><img src={frontendAssets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Navbar
