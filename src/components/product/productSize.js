import React from 'react'
import {Row, Col, Button } from 'react-bootstrap'

function ProductSize() {
    const productSize = [35,36,37,38,39,40,41,42,43]
    return (
        productSize.map((productSize) =>  
            <Col sm={4} className="text-center">
                <Button className="px-4 w-100 my-2" variant="light">{productSize}</Button>
            </Col>
        )

    )
}
export default ProductSize;