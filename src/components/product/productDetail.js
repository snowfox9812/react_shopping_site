import React from 'react'
import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import {Row, Col} from 'react-bootstrap'
import ProductPicture from './productPicture.js'
import ProductPrice from './productPrice.js'
import ProductRightSidebar from './productRightSidebar.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import Items from '../bottom/home/newItems.js'

function ProductDetail () {
    
    return (
        <div>
            <Header />
            <div id = "product-price-mobile">
                <div className="px-3">
                    <ProductPrice />
                </div>
            </div>
            <Row className="px-3">
                <Col lg={8}>
                    <Row>
                        <ProductPicture />
                    </Row>
                </Col>
                <Col lg={4} className="px-4 my-3">
                    <ProductRightSidebar />
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

export default ProductDetail;