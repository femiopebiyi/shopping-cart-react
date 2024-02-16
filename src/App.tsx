import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { Navbar } from './components/Navbar';
import { ShopContextProvider } from './context/shop-context';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart'>
            <Route index element={<Cart/>}/>
            <Route path='checkout' element={<Checkout/>}/>
          </Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
    
  );
}

export default App;
