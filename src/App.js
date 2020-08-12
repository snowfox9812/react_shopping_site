import React from 'react';
import './App.css';
import Home from './components/bottom/home/home.js'
import Men from './components/bottom/men/showMenItems.js'
import ProductDetail from './components/product/productDetail.js'
import Cart from './components/cart/cart.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path ="/men/tshirt">
          <ProductDetail />
        </Route>
        <Route path = "/men">
          <Men />
        </Route> 
        <Route exact path ="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
