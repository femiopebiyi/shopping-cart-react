import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";



export function Navbar(){



    return <div className="navbar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cart'>
            <ShoppingCart/>
        </NavLink>
    </div>
}