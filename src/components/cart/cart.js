import React from 'react'
import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'
import {useState} from 'react'
import AlertDissmisable from './showRecommendAlert.js'
import BagItem from './bagItem.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import Items from '../bottom/home/newItems.js'

function Cart() {
    const [show, setShow] = useState(true);
    var cartInfo = {
        pickupItems: '',
        pickupPrice: '4.999.999d',
        pickupDiscount: 0,
        shipping:0,
        totalPrice: 0
    };
    return (
        <div>
            <Header />
                <Row className="mx-3 py-5 border-bottom">
                    <Col lg={8}>
                        <div style={{width:'75%', margin:'0 auto'}} >
                            <AlertDissmisable />
                        </div>
                        <div>
                            <h3 className="font-weight-bold">Bag</h3>
                            <BagItem />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <h4 class="d-flex justify-content-between align-items-center mb-3">Summary</h4>
                        <Row className="py-2">
                            <Col sm={8} varriant="secondary">Subtotal</Col>
                            <Col sm={4}>{cartInfo.pickupPrice}</Col>
                        </Row>
                        <Row className="py-2">
                            <Col sm={8} varriant="secondary">Estimated Delivery and Handling</Col>
                            <Col sm={4}>{cartInfo.shipping}</Col>
                        </Row>
                        <Row className="py-4 border-top border-bottom">
                            <Col sm={8} varriant="secondary">Total</Col>
                            <Col sm={4}>{cartInfo.pickupPrice}</Col>
                        </Row>
                        <div className="my-3 text-center">
                            <Button className="badge badge-pill badge-dark p-3">Guest Checkout</Button>{' '}
                            <Button className="badge badge-pill badge-dark p-3">Member Checkout</Button>{' '}
                        </div>
                    </Col>
                </Row>
                <div>
                    <h3 className="p-3">You may also like</h3>
                    <Swiper
                            className="mb-5 m-3"
                            spaceBetween={30}
                            
                            slidesPerView={4}
                            // onSwiper={(swiper) => console.log(swiper)}
                            breakpoints
                            >
                            <SwiperSlide>
                                <Items />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Items />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Items />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Items />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Items />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Items />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Items />
                            </SwiperSlide>
                        </Swiper>
                </div>
            <Footer />
        </div>
    )
}

export default Cart;