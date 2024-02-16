import { useContext, useEffect, useState } from "react";
import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import './cart.css'
import { useNavigate } from "react-router-dom";



export function Cart(){

const {cartItem, getTotalAmount} = useContext(ShopContext);
const navigate = useNavigate()
const [length, setLength] = useState<number | null>(null)

const lengthItem = products.filter((product)=>{
    if (cartItem[product.id] > 0){
        return product
    }
})

useEffect(()=>{
    setLength(lengthItem.length)
},[lengthItem.length])



let totalAmount = getTotalAmount()
    return <div className="cart">
        <div><h1>Your Cart Items({length})</h1></div>

        <div className="cartItems">
            {products.map((product, index)=> {
                if (cartItem[product.id] > 0){
                    return <CartItem data= {product} key={index}/>
                }
            })}
        </div>

        <div className="total">
            <p className="subtotal">Subtotal: ${totalAmount}</p>
            <button onClick={()=> navigate('/')}>Continue Shopping</button>
            <button onClick={()=> navigate("checkout")}>Checkout</button>
        </div>
    </div>
}