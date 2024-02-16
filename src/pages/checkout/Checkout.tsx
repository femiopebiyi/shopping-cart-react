import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/shop-context';
import { products } from '../../products';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {  
  const {cartItem, getTotalAmount} = useContext(ShopContext);
  const [deliverFee, setDeliveryFee] = useState<number | null>(null)
  const [customFee, setCustomFee] = useState<number | null>(null)
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
      setDeliveryFee(0)
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
  },[])
  useEffect(()=>{
    Custom()
  },[])


  const navigate= useNavigate()

  return (
    <div className='checkout'>
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
            <h5>${customFee && deliverFee ? total+customFee+deliverFee : total }</h5>
          </div>
        </div>

        <button id='checkout'>Confirm Order</button>
    </div>
  )
}

export default Checkout
