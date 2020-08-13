import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Product(productContent) {
    var productContent = {
        title : "FC Barcelona 2020/21 Stadium Away",
        price : "1,939,000vnd",
        description: "Men's T-shirt",
        image: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/6f6fb6e5-6482-467f-a464-a4871a4c71be/fc-barcelona-2020-21-stadium-away-older-football-shirt-v4Kcrn.jpg",
        size:"",

    }
    return (
        <Link className="col-lg-4 col-sm-6 my-3 item-content" to="/men/tshirt">
            <Card>
                <Card.Img href="/product-detail" variant="top" src={productContent.image} />
                <Card.Body>
                    <Card.Title>{productContent.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{productContent.price}</Card.Subtitle>
                    <Card.Text>
                        {productContent.description}
                    </Card.Text>
                    <Button className="mx-1" variant="primary">Buy now</Button>
                    <Button className="mx-1" variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Product;