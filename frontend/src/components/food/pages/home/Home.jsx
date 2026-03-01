import React, { useState } from 'react'
import './home.css'
import Header from '../../header/Header'
import ExploreMenu from '../../expoloremenu/ExploreMenu'
import FoodDisplay from '../../foodDisplay/FoodDisplay'
import AppDownload from '../../appdownload/AppDownload'
function Home() {
    const [category,setCategory]=useState('All')

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
