import "./shop.css"

import { Data } from "./Shop"
import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { DotsThreeVertical } from "phosphor-react"
import { ProductInfo } from "./ProductInfo"


export function Product ({data}: { data: Data }){

    const {cartItem, addToCart, displayInfo, showInfo} = useContext(ShopContext)



    const {price, productImage, productName,id, specs} = data;

     const cartItemAmount = cartItem[id]

    return <div className="product">
        <DotsThreeVertical  size={24} onClick={()=> displayInfo(id)}/>
        <ProductInfo info={specs} showInfo={showInfo[id]} />
        <img src={productImage} alt="" className="product-img"/>

        <div className="deets">
            <p><b>{productName}</b></p>

            <p>${price}</p>
        </div>

        <button className="addToCartBttn" onClick={()=>{addToCart(id)}}>Add To Cart {cartItemAmount > 0 && `(${cartItemAmount})`}</button>
    </div>
}