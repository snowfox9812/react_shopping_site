import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/firestore";


function Product(prop) {
    return (
        <Link className="col-lg-4 col-sm-6 my-3 item-content link" to="/men/shoes-detail">
            <Card>
                <Card.Img href="/product-detail" variant="top" src={prop.image} />
                <Card.Body>
                    <Card.Title style={{height:'70px'}}>{prop.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{prop.price}</Card.Subtitle>
                    <Card.Text>
                        {prop.description}
                    </Card.Text>
                    <button type="button" className="btn btn-outline-dark rounded-pill m-1">Buy Now</button>
                    <button type="button" className="btn btn-outline-dark rounded-pill m-1">Add To Bag</button>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Product;