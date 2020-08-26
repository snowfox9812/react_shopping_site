import React, { useState } from 'react';
import Product from '../../product/product.js';
import Header from '../../header/header.js';
import Footer from '../../footer/footer.js';
import Sidebar from '../../sidebar/sideBar.js';

import * as firebase from "firebase/app";
import "firebase/firestore";

import {
    FirestoreProvider,
    FirestoreCollection
} from "@react-firebase/firestore";


const s = (a) => JSON.stringify(a, null, 2);
var temp ="";

function Men() {
    let obj = [];
    const [data, setData] = useState("");

    async function getData() {
        await firebase.firestore().collection('product').doc('0').collection('clothing').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().price, "  ", doc.data().description);
                // price = doc.data();
                obj.push(doc.data())
            });

        });
        // setData({obj})
        console.log(obj);
        temp = obj;
    }

    getData();
    console.log('1', obj);

    return (
        <div>
            <Header />
            <div className="d-flex p-3">
                {console.log('start')}
                <div id="nav-left-sidebar" className="minw-240">
                    <Sidebar />
                </div>
                <div className="row mx-1 fl-1-0-80">
                    {console.log(obj)}
                    {
                        // obj.map((item, ind) => {
                        //     console.log(item, "2")
                        //     return (
                        //         <Product
                        //             key={ind}
                        //             title={item.name}
                        //             price={item.price}
                        //             description={item.description}
                        //             image={item.images[0]}
                        //         />
                        //     )
                        // })

                        obj.map((item, id) => console.log(item, "2"))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Men;