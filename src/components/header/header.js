import React from 'react';
import TopHeader from './topHeader.js'
import BottomHeader from './bottomHeader.js'

function Header() {
    return(
        <div className="bg-white fixed-top">
            <TopHeader />
            <BottomHeader />
        </div>
    )
}

export default Header