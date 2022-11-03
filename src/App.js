import './App.css';
import Header from './common/Header';
import Pages from './pages/Pages';
import {

  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FlashData from "./components/flashDeals/FlashData"
import SData from "./components/shop/SData"
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Footer from './common/Footer/Footer';



function App() {

  const {productItems} = FlashData
  const {shopItems}    = SData
  const [cartItem,setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQuantity = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }


  return (
    <Router>
      <Header cartItem={cartItem} />
      <Switch>
        <Route path="/" exact>
          <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
        </Route>
        <Route path="/cart" exact>
          <Cart cartItem={cartItem} addToCart={addToCart} decreaseQuantity={decreaseQuantity}/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
