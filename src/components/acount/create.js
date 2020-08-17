import React from 'react';

import './account.css';

import { Form, FormGroup, FormLabel, FormControl, FormText, Button, Nav } from 'react-bootstrap';

import NikeLogo from '../../asset/img/icon/Nike_logo.jpg';

export default function Create() {
    return (
        <div className="Create">
            <img src={NikeLogo} width={50} />
            <h2>BECOME A NIKE MEMBER</h2>
            <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" placeholder="First Name" name="first_name" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="text" placeholder="Last Name" name="last_name" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="date" placeholder="Date Of Birth" />
                </Form.Group>

                <Form.Group>
                    <Form.Check
                        inline
                        label="Male"
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        inline
                        label="Female"
                        type="radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2" /
                    >
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                    <Form.Control as="select" size="md" custom>
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

                <Button variant="primary" type="submit" size="lg" > Create </Button>
                <p style={{padding: "30px 0 0 0"}}>Already a member? <Nav.Link href="/sign-in">Sign in.</Nav.Link></p>
            </Form>
        </div>
    )
}