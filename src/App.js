import React, { useState } from 'react';
import './App.css';
import Home from './components/bottom/home/home.js'
import Men from './components/bottom/men/showMenItems.js'
import Clothing from './components/bottom/men/showClothingItems.js'
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
import { config } from "./firebaseConfig.js";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import * as firebase from "firebase/app";

import "firebase/firestore";

import {
  FirestoreProvider,
  FirestoreCollection
} from "@react-firebase/firestore";

const userName = "";

const s = (a) => JSON.stringify(a, null, 2);

function App() {
  return (
    <div>
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/men/shoes-detail">
              <ProductDetail />
            </Route>
            <Route exact path="/men/shoes">
              <Men />
            </Route>
            <Route exact path="/men/clothing">
              <Clothing />
            </Route>
            <Route exact path="/cart">
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
      </FirebaseAuthProvider>
    </div>
  );
}

export default App;