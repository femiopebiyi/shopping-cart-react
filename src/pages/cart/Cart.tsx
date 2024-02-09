import { useContext } from "react";
import { products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import './cart.css'



export function Cart(){

const {cartItem, getTotalAmount} = useContext(ShopContext)

let totalAmount = getTotalAmount()
    return <div className="cart">
        <div><h1>Your Cart Items</h1></div>

        <div className="cartItems">
            {products.map((product, index)=> {
                if (cartItem[product.id] > 0){
                    return <CartItem data= {product} key={index}/>
                }
            })}
        </div>

        <div className="total">
            <p className="subtotal">Subtotal: ${totalAmount}</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        </div>
    </div>
}