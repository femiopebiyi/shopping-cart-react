
import { products } from "../../products"
import { Product } from "./product"
import "./shop.css"


 export type Data = {
        id: number;
        productName: string;
        price: number;
        productImage: string;
        specs: string
    }

export function Shop(){
    
    return <div className="shop">
        <div className="shopTitle">
            <h1>Femi Shop</h1>
        </div>

        <div className="products">
            {products.map((product, index) =>{
                return <Product data = {product} key={index}/>
            })}
        </div>
    </div>
}