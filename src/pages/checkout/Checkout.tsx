import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/shop-context';
import { products } from '../../products';
import { useNavigate } from 'react-router-dom';
import {ArrowLeft} from"phosphor-react"

const Checkout = () => {  
  const {cartItem, getTotalAmount} = useContext(ShopContext);
  const [deliverFee, setDeliveryFee] = useState<number>(0)
  const [customFee, setCustomFee] = useState<number>(0)
  const total = getTotalAmount()

  const lengthItem = products.filter((product)=>{
    if (cartItem[product.id] > 0){
        return product
    }
})
  function Delivery (): void{
    if (lengthItem.length>= 5){
      setDeliveryFee(Number(((.5/100)* total).toFixed(2)))
    } else{
      setDeliveryFee(Number(((.8/100)* total).toFixed(2)))
    }
  }

  function Custom (): void{
    if (total > 5000){
      setCustomFee(Number(((.2/100)* total).toFixed(2)))
    } else{
      setCustomFee(Number(((5/100)* total).toFixed(2)))
    }
  }

  useEffect(()=>{
    Delivery()
  },[total])
  useEffect(()=>{
    Custom()
  },[total])


  const navigate= useNavigate()

  return (
    <div className='checkout'>
      <ArrowLeft size={32} onClick={()=>{
        navigate("..")
      }}/>
        <h2>Order Summary</h2>

        <div className="order-total">
          <div className="total-fees">
            <p>items total ({lengthItem.length})</p>
            <h5>${total}</h5>
          </div>
          <div className="total-fees">
            <p>Delivery Fees</p>
            <h5>${deliverFee}</h5>
          </div>
          <div className="total-fees">
            <p>Custom Fees</p>
            <h5>${customFee}</h5>
          </div>
          <div className="total-fees">
            <p>Total</p>
            <h5>${customFee && deliverFee ? (total+customFee+deliverFee).toFixed(2) : total }</h5>
          </div>
        </div>

        <button id='checkout'>Confirm Order</button>
    </div>
  )
}

export default Checkout
