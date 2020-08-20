import React, { useState } from 'react';

import './account.css';

import { Form, Button } from 'react-bootstrap';

import NikeLogo from '../../asset/img/icon/Nike_logo.jpg';
import {
    Link,
} from "react-router-dom";

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase'
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const auth = firebaseApp.auth();
const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };
var db = firebase.firestore();

function Login(props) {
    const user = props.user;
    const signOut = props.signOut;
    const signInWithGoogle = props.signInWithGoogle;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });



    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email.trim(), password.trim())
            .catch(error => {
                setError("Error signing in with password and email!");
                console.error("Error signing in with password and email", error);
            });
        console.log(email, password)
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    const validateEmail = (event) => {
        
    }

    return (
        <div className="Create">
            <Link to="/"><img alt="" src={NikeLogo} width={50} /></Link>
            <h2>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
            <Form onSubmit={(event) => { signInWithEmailAndPasswordHandler(event, email.trim(), password.trim()) }}>
                <Form.Group>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        id="userEmail"
                        defaultValue={email}
                        onChange={(event) => onChangeHandler(event)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" name="password" placeholder="Password" id="userPassword" defaultValue={password} onChange={(event) => onChangeHandler(event)} />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" > Login </Button>
                <p style={{ padding: "30px 0 0 0" }}>Not a member? <Link to="/create-account">Create.</Link></p>
            </Form>
            <div>
                {user ? <p>{user.displayName}</p> : <p>Please sign in.</p>}
                {user ? <Button onClick={signOut}>Sign out</Button>
                    : <Button onClick={signInWithGoogle}>
                        <span className="mr-2">Sign in with Google</span>
                        <i className="fab fa-google"></i>
                    </Button>
                }
            </div>
        </div>
    )
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);