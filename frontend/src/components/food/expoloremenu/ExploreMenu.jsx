import React from 'react'
import './exploremenu.css'
import { assets as frontendAssets } from '../../../assets/food_assets/frontend_assets/assets'
import { assets as adminAssets } from '../../../assets/food_assets/admin_assets/assets'
import { menu_list } from '../../../assets/food_assets/frontend_assets/assets'
function ExploreMenu({category,setCategory}) {
    
  return (
    <div>
      <div className="explore-menu" id='explore-menu'>
            <h1>Explore out menu</h1>
            <p className="explore-menu-text">please choose a diverse menu faturing a delectable array of dishes crafte with the finest ingredeints and ...</p>
            <div className="explore-menu-list">
                {
                    menu_list.map((item,index)=>{
                        return (
                            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className="explore-menu-list-item">
                                <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
      </div>
    </div>
  )
}

export default ExploreMenu
