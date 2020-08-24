import React from 'react';

import './account.css';

import { Form, Button, Nav } from 'react-bootstrap';

import NikeLogo from '../../asset/img/icon/Nike_logo.jpg';
import {
    Link
} from "react-router-dom";

export default function Create() {
    return (
        <div className="Create">
            <Link to="/"><img alt="" src={NikeLogo} width={50} /></Link>
            <h2>BECOME A NIKE MEMBER</h2>
            <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" placeholder="First Name" name="first_name" required />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" placeholder="Last Name" name="last_name" required />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="date" placeholder="Date Of Birth" required />
                </Form.Group>

                <Form.Group>
                    <Form.Check
                        inline
                        label="Male"
                        type="radio"
                        name="formHorizontalRadios"
                        checked
                    />
                    <Form.Check
                        inline
                        label="Female"
                        type="radio"
                        name="formHorizontalRadios"
                    />

                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Control as="select" size="md" custom required>
                        <option selected>Vietnam</option>
                        <option>Americas</option>
                        <option>England</option>
                        <option>China</option>
                        <option>Korea</option>
                        <option>Japan</option>
                        <option>Australia</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Link to="/sign-in"><Button variant="primary" type="submit" size="lg" > Create </Button></Link>
                <p style={{ padding: "30px 0 0 0" }}>Already a member? <Nav.Link href="/sign-in">Sign in.</Nav.Link></p>
            </Form>
        </div>
    )
}