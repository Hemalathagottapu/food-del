import React from 'react'
import './orders.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useState } from 'react'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
function Orders({url}) {
  const [orders,setOrders]=useState([]);
  const fetchAllorders=async()=>{
    const response=await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data)
      console.log(response.data.data)
    }
    else
    {
      toast.error("Error")
    }
  }


  const statusHandler=async(event,orderId)=>{
    console.log(event,orderId)
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    
    if(response.data.success){
      await fetchAllorders();
    }
    
  }
useEffect(()=>{
  fetchAllorders();
},[])
  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {
          orders.map((order,index)=>{
            return (<div className="order-item" key={index}>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item-food">
                  {
                    order.items.map((item,index)=>{
                      if(index===order.items.length-1){
                        return item.name+" X "+item.quantity
                      }
                      else

                        {
                          return item.name+ " X "+item.quantity+","
                        }
                    })
                  }
                </p>
                <p className="order-item name">
                  {order.address.firstName+" "+order.address.lastName}
                </p>
                <div className="order-item-address">
                  <div>{order.address.street+","}</div>
                  <div>{order.address.city+" "+order.address.state+","+order.address.country+","+order.address.zipcode}</div>
                </div>
                <p className="order-item-phone">
                  {order.address.phone}
                </p>
              </div>
              <p>Item:{order.items.length}</p>
              <p>${order.amount}</p>
              <select value={order.status} onChange={(event)=>statusHandler(event,order._id)}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Deliavary">Out for Deliavary</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default Orders
