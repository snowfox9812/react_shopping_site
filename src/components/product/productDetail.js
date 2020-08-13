import React from 'react'
import Product from './product.js'
import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'
import ProductPicture from './productPicture.js'

function ProductDetail () {
    
    return (
        <div>
            <Header />
            <div>

            </div>
            <Row>
                <Col lg={8}>
                    <Row>
                        <ProductPicture />
                    </Row>
                </Col>
                <Col lg={4}>

                </Col>
            </Row>
            <Footer />

        </div>
    )
}

export default ProductDetail;