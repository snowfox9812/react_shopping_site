import React from 'react';
import itemsPicture from '../../../asset/img/home/new-arrival.jpg';

function Items() {
    return (
        <div className = "new-arrival-item">
            <img alt="" className="new-arrival-picture" src={itemsPicture}></img>
            <div className="p-2">
                <span className="float-left">New T-shirt</span>
                <span className="float-right">300.000vnd</span>
            </div>                            
        </div>
    );
}
export default Items;