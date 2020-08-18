import React from 'react'
import ProductPrice from './productPrice.js'
import ProductSize from './productSize.js'
import {Row, Col} from 'react-bootstrap'
import Collapsible from 'react-collapsible';

function ProductRightSidebar() {
    return (
        <div className="px-3">
            <div id="product-price-pc">
                <ProductPrice />
            </div>
            <Row>
                <Col>Select Size</Col>
                <Col>
                    <span className="text-secondary float-right">Size Guide</span>
                </Col>
            </Row>
            <Row>
                <ProductSize />
            </Row>
            <div className="mx-4 my-2">
                <button type="button" className="btn btn-outline-dark rounded-pill" style={{width:'100%'}}>Add To Bag</button>
            </div>
            <div className="mx-4 my-2">
                <button type="button" className="btn btn-outline-dark rounded-pill" style={{width:'100%'}}>Favourite
                    <i className="fal fa-heart ml-1"></i> 
                </button>
            </div>
            <div className="border-bottom p-2">
                <Collapsible trigger="Free Delivery and Returns" transitionTime="150">
                    <div className="m-2">
                        <p>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                    </div>
                </Collapsible>
            </div>
            <div className="border-bottom p-2">
                <Collapsible trigger="Review" transitionTime="150">
                    <div className="m-2">
                        <p>Good sneaker!!</p>
                    </div>
                </Collapsible>
            </div>
        </div>
    )
}
export default ProductRightSidebar;