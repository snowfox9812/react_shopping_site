import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import './item.css';

export default function Item(props) {

    const [display, setDisplay] = useState(false)

    const handleOnMouseOver = () => {
        setDisplay(true);
    }

    const handleOnMouseOut = () => {
        setDisplay(false);
    }

    return (
        <div className="item">
            <Link to="/launch/item">
                <img alt="item" className="image_item" src={props.src}/>
            </Link>
            <div id="item_title" onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <div id="item_title_text" style={{display: display ? "none" : "block"}}>
                    <h6>{props.h6}</h6>
                    <h2>{props.h2}</h2>
                </div>
                <div id="item_title_button" style={{display: display ? "block" : "none"}}>
                    <Button variant="light" type="button" size="lg" >COMING SOON</Button>
                </div>
            </div>
        </div>
    )
}