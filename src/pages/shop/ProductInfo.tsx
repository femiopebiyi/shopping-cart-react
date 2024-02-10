import { useContext } from "react"
import { ShopContext } from "../../context/shop-context"
import { products } from "../../products";


interface ProductInfoProps {
    info: string;
    showInfo: boolean
}

export function ProductInfo ({ info, showInfo }: ProductInfoProps){

    


   
    return <div className="info" style={{
        display: showInfo ? 'block' : 'none'
    }}>
        <p className="info-text">{info}</p>
    </div>
}