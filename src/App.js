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
} from "react-router-dom";
import Create from './components/acount/create';
import Login from './components/acount/login';
import Launch from './components/launch/launch';
import ItemDetail from './components/launch/itemDetail';

function App() {
  return (
    <div>
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
        <Route exact path="/create-account">
          <Create />
        </Route>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route exact path="/launch">
          <Launch />
        </Route>
        <Route exact path="/launch/item">
          <ItemDetail />
        </Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;