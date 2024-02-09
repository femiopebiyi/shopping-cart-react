import { ReactNode, createContext, useState } from "react"
import { products } from "../products"
import { Data } from "../pages/shop/Shop"


export const ShopContext = createContext<{
  cartItem: { [productId: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}>({
  cartItem: {},
  addToCart: (itemId: number) => {},
  removeFromCart: (itemId: number) => {}
});

interface Props {
    children: ReactNode;
}


const getDefaultCart = (): { [productId: number]: number } => {
    const cart: { [productId: number]: number } = {};

    for (let i = 0; i < products.length; i++) {
        const productId = products[i].id;
        cart[productId] = 0;
    }

    return cart;
};
export function ShopContextProvider(props: Props){

    const [cartItem, setCartItem] = useState(getDefaultCart())

    const addToCart = (itemId: number)=>{
        setCartItem((prev)=> ({...prev, [itemId]: prev[itemId]+ 1}))
    }

    const removeFromCart = (itemId: number)=>{
        setCartItem((prev)=> ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemAmount = (newAmount: number, itemId: number)=>{
        setCartItem((prev)=> ({...prev, [itemId]: newAmount}))
    }

    const contextData = {updateCartItemAmount,cartItem, addToCart, removeFromCart}



    return <ShopContext.Provider value={contextData}>
        {props.children}
    </ShopContext.Provider>
}