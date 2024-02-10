import { ReactNode, createContext, useEffect, useState } from "react"
import { products } from "../products"
import { Data } from "../pages/shop/Shop"


export const ShopContext = createContext<{
  cartItem: { [productId: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemAmount: (newAmount: number, itemId: number) => void; 
  getTotalAmount: ()=> number
}>({
  cartItem: {},
  addToCart: (itemId: number) => {},
  removeFromCart: (itemId: number) => {},
  updateCartItemAmount: (newAmount: number, itemId: number) => {}, 
  getTotalAmount: ()=> 0
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


    
    useEffect(() => {
        // Retrieve cart items from localStorage when the component mounts
        const savedCart = localStorage.getItem('cartItem');
        if (savedCart) {
            setCartItem(JSON.parse(savedCart));
        }
    }, []);

 
    const addToCart = (itemId: number) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            // Save updated cart to localStorage
            localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };


   const removeFromCart = (itemId: number) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev, [itemId]: Math.max(0, prev[itemId] - 1) };
            // Save updated cart to localStorage
            localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

     const updateCartItemAmount = (newAmount: number, itemId: number) => {
        setCartItem((prev) => {
            const updatedCart = { ...prev, [itemId]: newAmount };
            // Save updated cart to localStorage
            localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };



        const getTotalAmount = ()=>{
            let total = 0;
            for(const item in cartItem){
                if(cartItem[item] > 0){
                    let itemInfo = products.find((product)=> product.id === Number(item))
                    if(itemInfo)
                    total+= cartItem[item] * itemInfo?.price
                }
            }

            console.log(total)
            return total
        }
    const contextData = {updateCartItemAmount,cartItem, addToCart, removeFromCart, getTotalAmount}

    

    return <ShopContext.Provider value={contextData}>
        {props.children}
    </ShopContext.Provider>
}