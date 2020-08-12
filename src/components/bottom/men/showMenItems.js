import React from 'react'
import Product from '../../product/product.js'
import Header from '../../header/header.js'
import Footer from '../../footer/footer.js'
import Sidebar from '../../sidebar/sideBar.js'


function Men() {
    return (
        <div>
            <Header />
            <div className="d-flex p-3">
                <div id="nav-left-sidebar" className="minw-240">
                    <Sidebar />
                </div>
                <div className = "row mx-1 fl-1-0-80">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Men;