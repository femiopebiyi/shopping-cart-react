import "./shop.css"

import { Data } from "./Shop"
import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"


export function Product ({data}: { data: Data }){

    const {cartItem, addToCart, removeFromCart} = useContext(ShopContext)



    const {price, productImage, productName,id} = data;

     const cartItemAmount = cartItem[id]

    return <div className="product">
        <img src={productImage} alt="" className="product-img"/>

        <div className="deets">
            <p><b>{productName}</b></p>

            <p>${price}</p>
        </div>

        <button className="addToCartBttn" onClick={()=>{addToCart(id)}}> Add To Cart {cartItemAmount > 0 && `(${cartItemAmount})`}</button>
    </div>
}