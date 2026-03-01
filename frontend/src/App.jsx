

import React, { useState } from 'react'
import Navbar from './components/food/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/food/pages/home/Home'
import Cart from './components/food/pages/cart/Cart'
import Placeorder from './components/food/pages/placeorder/Placeorder'
import Footer from './components/food/footer/Footer'
import LoginpopUp from './components/food/loginpopup/LoginpopUp'
import Verify from './components/food/pages/verify/Verify'
import Myorders from './components/food/pages/myorders/Myorders'
function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
      {
        showLogin?<LoginpopUp setShowLogin={setShowLogin}/>:<></>
      }
      <div className='App'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          < Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeorder/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<Myorders/>}/>
        </Routes>
        
        
      </div>
      <Footer/>
    </>
  )
}

export default App

