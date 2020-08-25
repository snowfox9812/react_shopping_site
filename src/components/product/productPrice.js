import React from 'react'
import {Row, Col } from 'react-bootstrap'

function ProductPrice() {
    const productInfo = {
        category: 'shoes',
        gender: 'Men',
        name: 'Nike Air VaporMax Flyknit 3',
        price: '4.999.999d'
    }

    return (
        <Row>
            <Col sm={8}>
                <div><span>{productInfo.gender}'s {productInfo.category}</span></div>
                <div>
                    <h3>{productInfo.name}</h3>
                </div>
            </Col>
            <Col sm={4}><span style={{float:'right'}}>{productInfo.price}</span></Col>
        </Row>
    )
}
export default ProductPrice;