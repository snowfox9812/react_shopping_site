import React, { useState } from 'react';

import './account.css';

import { Form, Button } from 'react-bootstrap';

import NikeLogo from '../../asset/img/icon/Nike_logo.jpg';
import {
    Link,
    Route,
    Redirect,
  } from "react-router-dom";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
    FirebaseAuthProvider,
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd,
  } from "@react-firebase/auth";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
    return (
        <div className="Create  ">

            <Link to="/"><img src={NikeLogo} width={50} /></Link>
            <h2>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
            <div className="my-3">
            <Button
                onClick={() => {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(googleAuthProvider);
                    console.log(googleAuthProvider)
                    // handleClick();
                }}
                >
              Sign In with Google
            </Button>
            </div>
            <div className="my-3">
              <Button
                  onClick={() => {
                    firebase.auth().signOut();  
                  }}
              >
                  Sign Out
              </Button>
            </div>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            var userData = JSON.stringify({ isSignedIn, user, providerId }, null, 2);
              return (
                <pre style={{ height: 300, overflow: "auto" }}>
                  {userData}
                </pre>
              );
          }}
        </FirebaseAuthConsumer>
        <div>
          <IfFirebaseAuthed>
            {() => {
              return <div>You are authenticated</div>;
            }}
          </IfFirebaseAuthed>
          <IfFirebaseAuthedAnd
            filter={({ providerId }) => providerId !== "anonymous"}
          >
            {({ isSignedIn }) => {
              return <div>You are authenticated with {isSignedIn == true ? "1":"2"}</div>;
            }}
          </IfFirebaseAuthedAnd>
        </div>
      </div>
    );
}
export default Login;