import React from 'react';

import './launch.css';

import { Link } from 'react-router-dom';

import { Row, Col, Button} from 'react-bootstrap';

import SNKRS from '../../asset/img/icon/SNKRS.png';
import Footer from '../footer/footer';
import ProductPicture from '../product/productPicture';

export default function ItemDetail() {

    return (
        <div>
            <Row id="topbar">
                <Col id="topbar_left">
                    <Link to="/" className="link">
                        <i class="fas fa-angle-left"></i>
                        <span>Visit Nike.com</span>
                    </Link>
                </Col>
                <Col>
                    <ul id="topbar_right" style={{ float: "right" }}>
                        <li>Join/Log In</li>
                        <li>Help</li>
                        <li>
                            <i className="fas fa-shopping-cart"></i>
                        </li>
                        <li id="top_map">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Vietnam</span>
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row id="bottom-header">
                <Col xl="3" md="3" id="logo_sneaker">
                    <Link to="/launch"><img alt="logo_sneakerNike" src={SNKRS} width="auto" height={42} /></Link>
                </Col>

                <Col>
                    <ul id="menu">
                        <li><Link className="link">FEED</Link></li>
                        <li><Link className="link">IN STOCK</Link></li>
                        <li><Link className="link">UPCOMING</Link></li>
                    </ul>
                </Col>

                <Col xl="3" md="3" sm="3">
                    <i className="fas fa-th-large" id="grid"></i>
                </Col>

            </Row>

            <Row id="content">
                <Col lg={8}>
                    <Row>
                        <ProductPicture />
                    </Row>
                </Col>
                <Col lg={4} className="px-4 my-3 item_even">
                    <h6>WIMEN'S AIR JORDAN 3</h6>
                    <h1>LASER ORANGE</h1>
                    <p>5.589.000đ</p>
                    <h6>AVAILABLE 8/21 AT 9:00 AM</h6>      
                    <p>This women's-exclusive Air Jordan 3 features a white, tumbled leather upper with hits of Laser Orange throughout the sockliner, eyelets and midsole. Incorporating iconic elephant print on the toe and heel, this iteration is completed by a Laser Orange Jumpman "Air" hangtag.</p>              
                    <Button variant="light" type="button" size="lg" >COMING SOON</Button>
                </Col>
            </Row>

            <Row>
                <Footer />
            </Row>
        </div>
    )
}