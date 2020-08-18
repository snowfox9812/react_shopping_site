import React from 'react';

import './account.css';

import { Form, FormGroup, FormLabel, FormControl, FormText, Button, Nav } from 'react-bootstrap';

import NikeLogo from '../../asset/img/icon/Nike_logo.jpg';

import {
    Link
  } from "react-router-dom";

export default function Login() {
    return (
        <div className="Create">
            <Link to="/"><img src={NikeLogo} width={50} /></Link>
            <h2>YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit" size="lg" > Login </Button>
                <p style={{ padding: "30px 0 0 0" }}>Not a member? <Nav.Link href="/create-account">Create.</Nav.Link></p>
            </Form>

        </div>
    )
}