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
import Create from './components/acount/create';
import Login from './components/acount/login';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(props) {
  const user = props.user;
  const signOut = props.signOut;
  const signInWithGoogle = props.signInWithGoogle;
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
      </Switch>
    </Router>
      <div className="App" style={{width: '500px'}}>
          {
            user 
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
      </div>
    </div>

  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);