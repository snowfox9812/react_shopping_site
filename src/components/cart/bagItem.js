import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function BagItem() {
    var cartInfo = {
        pickupItems: 'Nike Air VaporMax Flyknit 3',
        pickupPrice: '4.999.999d',
        pickupDiscount: 0,
        totalPrice: 0,
        image:"https://images.nike.com/is/image/DotCom/CT1274_200_A_PREM?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg",
        color: 'Light Cream',
        gender: 'Male',
        type: 'shoe',
        size: 41
    };
    return (
        <div>
            <Row className="mx-3 py-5">
                <Col md={10} className="mt-3">
                    <div class="media">
                        <img src={cartInfo.image} class="mr-3" alt="..."></img>
                        <div class="media-body">
                            <h5 class="mt-0 mb-1">{cartInfo.pickupItems}</h5>
                            <div className="text-secondary">{cartInfo.gender}'s {cartInfo.type}</div>
                            <div className="text-secondary">{cartInfo.color}</div>
                            <Row>
                                <Col style={{maxWidth:'50px'}}><label for="chooseSize">Size</label></Col>
                                <Col style={{maxWidth:'100px'}}>
                                    <select style={{width:''}} className="form-control" id="chooseSize">
                                        <option selected="selected">{cartInfo.size}</option>
                                        <option>37</option>
                                        <option>38</option>
                                        <option>39</option>
                                        <option>40</option>
                                    </select>
                                </Col>
                                <Col style={{maxWidth:'150px'}}>
                                    <Button variant="light" size="md" block>Remove</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col md={2} className="mt-3">{cartInfo.pickupPrice}</Col>
            </Row>
        </div>
    )
}

export default BagItem;