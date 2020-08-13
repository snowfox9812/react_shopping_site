import React from 'react'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'

function ProductPicture() {
    var imageList = [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-1168e89a-4264-4726-a2d9-f4cdd7c4d016/air-vapormax-flyknit-3-shoe-rWRSNW.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-5515cc0f-4b2c-4102-9ab5-a8242036e6c8/air-vapormax-flyknit-3-shoe-rWRSNW.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-09b993c3-5e35-44f9-8e3a-41014a0cb1df/air-vapormax-flyknit-3-shoe-rWRSNW.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-20046e0d-f8f6-42ca-a423-c94d941ed10d/air-vapormax-flyknit-3-shoe-rWRSNW.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-c4e510b1-29d9-4b38-b550-30eaf9e2e636/air-vapormax-flyknit-3-shoe-rWRSNW.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-fc7d81b8-4d0f-41a5-9f58-a79ca1305dc1/air-vapormax-flyknit-3-shoe-rWRSNW.jpg"
    ]
    return (
        imageList.map((imageList) => 
        <Col sm={6}>
            <img className="w-100 my-3" src={imageList}></img>
        </Col>
        )
        
    )
}
export default ProductPicture;