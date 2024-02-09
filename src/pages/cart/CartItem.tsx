import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { Data } from "../shop/Shop"
import './cart.css'



export const CartItem = ({data}: {data: Data})=>{

    const {cartItem, removeFromCart, addToCart} = useContext(ShopContext)

    const {id, price, productImage, productName } = data

        const cartItemAmount = cartItem[id]

    return <div className="cart-item">
        <img src={productImage} alt="" />

        <div className="description">
            <p><b>{productName}</b></p>

            <p>${price}</p>
            <div className="countHandler">
                <button onClick={()=>{removeFromCart(id)}}> - </button>
                <input type="text" value={cartItemAmount} onChange={(e)=>{
                    
                }}/>
                <button onClick={()=>{addToCart(id)}}> + </button>
            </div>
        </div>
    </div>
}