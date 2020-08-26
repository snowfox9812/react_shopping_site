import React, { useState } from 'react';
import Product from '../../product/product.js';
import Header from '../../header/header.js';
import Footer from '../../footer/footer.js';
import Sidebar from '../../sidebar/sideBar.js';

import { Button, Row, Col } from 'react-bootstrap';

import * as firebase from "firebase/app";
import "firebase/firestore";

import {
    FirestoreProvider,
    FirestoreCollection
} from "@react-firebase/firestore";


const s = (a) => JSON.stringify(a, null, 2);



function Men() {
    let obj = [];
    const dataInit = []
    const [data, setData] = useState(dataInit);

    async function getData() {
        await firebase.firestore().collection('product').doc('0').collection('clothing').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().price, "  ", doc.data().description);
                obj.push(doc.data())
            });

        });
    }

    getData();

    const handleLoadMore = (event) => {
        setData([].concat(data, obj));
    }

    return (
        <div>
            <Header />
            <Row style={{padding: "50px"}}>
                <Col lg={3}>
                    <div id="nav-left-sidebar" className="minw-240">
                        <Sidebar />
                    </div>
                </Col>
                <Col lg={9}>
                    <div className="row mx-1 fl-1-0-80">
                        {
                            data.map((item, ind) => {
                                return (
                                    <Product
                                        key={ind}
                                        title={item.name}
                                        price={item.price}
                                        description={item.description}
                                        image={item.images[0]}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="btn btn-outline-dark rounded-pill my-3"
                            style={{ width: '40%' }}
                            onClick={handleLoadMore}
                        >
                            Load More
                        </button>
                    </div>
                </Col>
            </Row>

            <Footer />
        </div>
    )
}

export default Men;