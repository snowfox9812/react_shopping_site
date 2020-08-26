import React from 'react';

import './launch.css';

import { Link } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import SNKRS from '../../asset/img/icon/SNKRS.png';
import Item from './item';
import Footer from '../footer/footer';

import * as firebase from "firebase/app";
import "firebase/firestore";

import {
    FirestoreProvider,
    FirestoreCollection
} from "@react-firebase/firestore";


const s = (a) => JSON.stringify(a, null, 2);

export default function Launch() {
    const data = [
        { h6: "AIR JORDAN 1 MID", h2: "TRACK RED", url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ee6f8e89-7792-4157-a03e-792a72f7a19c/air-jordan-1-mid-track-red-release-date.jpg" },
        { h6: "WOMEN'S AIR JORDAN 3", h2: "LASER ORANGE", url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/b0e4185b-ff1c-4f1c-9ade-744ba8f90be2/womens-air-jordan-3-laser-orange-release-date.jpg" },
        { h6: "ACG ZOOM AIR AO", h2: "BLACK", url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/76c5fdc8-807f-4aca-abb7-1a98b3fbc6fc/acg-zoom-air-ao-black-release-date.jpg" }
    ]

    let obj = [];

    async function getData() {
        await firebase.firestore().collection('product').doc('0').collection('clothing').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().price, "  ", doc.data().description);
                // price = doc.data();
                obj.push(doc.data())
            });
        });
        console.log(obj[0].name)
    }

    getData();

    return (
        <div className="launch">
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
                    <img alt="logo_sneakerNike" src={SNKRS} width="auto" height={42} />
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
                {
                    obj.map((item, index) => (
                        <div className="col-md-4">
                            <Item
                                key={index}
                                h6={item.name}
                                h2={item.description}
                                src={item.images[0]}
                            />
                        </div>)
                    )

                }

                {
                    data.map((item, index) => (
                        <div className="col-md-4">
                            <Item
                                key={index}
                                h6={item.h6}
                                h2={item.h2}
                                src={item.url}
                            />
                        </div>)
                    )
                }

                {
                    data.map((item, index) => (
                        <div className="col-md-4">
                            <Item
                                key={index}
                                h6={item.h6}
                                h2={item.h2}
                                src={item.url}
                            />
                        </div>)
                    )
                }

                {
                    data.map((item, index) => (
                        <div className="col-md-4">
                            <Item
                                key={index}
                                h6={item.h6}
                                h2={item.h2}
                                src={item.url}
                            />
                        </div>)
                    )
                }

            </Row>

            <Row>
                <Footer id="footer" />
            </Row>

        </div >
    )
}