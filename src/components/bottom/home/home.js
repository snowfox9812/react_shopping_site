import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Items from './newItems.js'

function Home() {
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          }
    }
    return(
        <div className="mx-3">
            <div className="home-present position-relative">
                <div className="present-content position-absolute text-white p-3">
                    <div>
                        <h2 className="home-new-product">New product</h2>
                    </div>
                    <div className="py-2">
                        <span>Speed, power and control for every type of player.</span>
                    </div>
                    <div className="py-2">
                        <button type= "button" className="btn btn-light btn-lg rounded-pill px-4">Shop</button>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h2 className="mb-3">Trending</h2>
                <div className="trending row p-3"> 
                    <div className="col-lg-6 col-md-6 col-sm-12 trending-item-1 position-relative">
                        <div className="trending-content position-absolute p-3">
                            <div className="trending-content-title">
                                <h4 className="text-white">Nike yoga collection</h4>
                            </div>
                            <div className="py-2">
                                <button type="button" className="btn btn-light btn-lg rounded-pill px-4">Shop</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 trending-item-2 position-relative">
                        <div className="trending-content position-absolute p-3">
                            <div className="trending-content-title">
                                <h4 className="text-white">Nike yoga collection</h4>
                            </div>
                            <div className="py-2">
                                <button type="button" className="btn btn-light btn-lg rounded-pill px-4">Shop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h2 className="mb-3">Features</h2>
                <div className="row p-3">
                    <div className="feature col-12"></div>
                    <div className="col-12 my-4">
                        <div className="text-center feature-title">
                            <h2 className="home-new-product pt-2">PARIS SAINT-GERMAIN 2020/21 KITS</h2>
                            <div className="py-2">Together we invincible</div>
                            <button type="button" className="btn btn-dark btn-lg rounded-pill px-4">Shop</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mb-3">New arrival</h2>
                <Swiper
                    className="mb-5"
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
            <div>
                <h2 className="mb-3">More Nike</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-5 position-relative text-center">
                        <img className="gender-category-picture mb-3" src="https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/43ee6e1b-ed6c-4e0f-8049-155a0ededff8/nike-just-do-it.jpg"></img>
                        <button type="button" className="btn btn-light btn-lg rounded-pill px-4">Men</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-5 position-relative text-center">
                        <img className="gender-category-picture mb-3" src="https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/5856e8b5-09a6-4763-9b4b-c1ecc7a3218f/nike-just-do-it.jpg"></img>
                        <button type="button" className="btn btn-light btn-lg rounded-pill px-4">Women</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mb-5 position-relative text-center">
                        <img className="gender-category-picture mb-3" src="https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/15c3c499-8584-4654-af89-f3b3aeb6b7db/nike-just-do-it.jpg"></img>
                        <button type="button" className="btn btn-light btn-lg rounded-pill px-4">Kids</button>
                    </div>
                </div>
                <div className="row">
                    <div className = "col-lg-3 col-md-3 col-sm-12">
                        <ul>
                            <li className="font-weight-bold mb-3">Icons</li>
                            <li className="mb-2">AirForce 1</li>
                            <li className="mb-2">Hurache</li>
                            <li className="mb-2">AirMax90</li>
                        </ul>
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-12">
                        <ul>
                            <li className="font-weight-bold mb-3">Shoes</li>
                            <li className="mb-2">All Shoes</li>
                            <li className="mb-2">Custom Shoes</li>
                            <li className="mb-2">Jordan Shoes</li>
                        </ul>
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-12">
                        <ul>
                            <li className="font-weight-bold mb-3">Clothing</li>
                            <li className="mb-2">All Clothing</li>
                            <li className="mb-2">Jackets</li>
                            <li className="mb-2">Shirts and tops</li>
                        </ul>
                    </div>
                    <div className = "col-lg-3 col-md-3 col-sm-12">
                        <ul>
                            <li className="font-weight-bold mb-3">Kid's</li>
                            <li className="mb-2">Kid's Shoes</li>
                            <li className="mb-2">Kid's Jordan Shoes</li>
                            <li className="mb-2">Kid's Clothing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home