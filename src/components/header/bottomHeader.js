import React, { useState, setState } from 'react';

function BottomHeader() {

    function openNav() {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("mobile-nav").style.marginLeft = "250px";
      }
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0px";
        document.getElementById("mobile-nav").style.marginLeft = "0px";
      }

    const [isToggle, setToggle] = useState(false);
    const [isToggle2, setToggle2] = useState(false);
    const handleClick = (e) => {
        var stateCheck = isToggle;

        if(stateCheck == false) {
            setToggle(true);
        } else setToggle(false);
      }
    const handleMen = (e) => {
        var stateCheck = isToggle2;

        if(stateCheck == false) {
            setToggle2(true);
        } else setToggle2(false);
    }
    return(
        <div id="nav-mobile" className="border-bottom mx-2 position-relative">
            {/* {console.log(isToggle)} */}
            <div className="p-4 position-absolute">
                <i id="logo" className="fal fa-store "></i>
            </div>
            <div id ="menu-items" className="text-center font-weight-bold">                    
                <div className="d-inline-flex">
                    <span className="p-4">MEN</span>
                </div>
                <div className="d-inline-flex">
                    <span className="p-4">WOMEN</span>
                </div>
                <div className="d-inline-flex">
                    <span className="p-4">KIDS</span>
                </div>
                <div className="d-inline-flex">
                    <span className="p-4">CUSTOMISE</span>
                </div>
                <div className="d-inline-flex">
                    <span className="p-4">SNKR LAUNCH CALENDAR</span>
                </div>
                <div className="d-inline-flex">
                    <span className="p-4">SALE</span>
                </div>
            </div>
            <div id= "search-box" className="text-center p-3">
                <form className="border py-2">
                    <i className="far fa-search"></i>
                    <input id="search-expand" className="border-0 ml-2" type="text" placeholder="Search" name="search" ></input>
                </form>
            </div>
            <div id="mobile-nav" className="p-4 float-right ">
                <button>
                    <i className="far fa-search"></i>
                </button>
                <button>
                    <i className="fas fa-shopping-cart"></i>
                </button>
                <button onClick={openNav}>
                    <i className="far fa-bars"></i>
                </button>
                <div id="mySidebar" className="sidebar">
                    <a id= "closebtn" className="p-2" href="#0" onClick={closeNav}>&times;</a>
                    <button class="dropdown-btn" onClick={handleClick}>My Account 
                        <i className="far fa-arrow-right"></i>
                    </button>
                    <div id="dropdown-container" className="dropdown-container pl-2" style={{display: isToggle ? 'block': 'none'}}>
                        <a className="py-1 px-2" href="#">Inbox</a>
                        <a className="py-1 px-2" href="#">Orders</a>
                        <a className="py-1 px-2" href="#">Favorites</a>
                        <a className="py-1 px-2" href="#">Account settings</a>
                        <a className="py-1 px-2" href="#">Logout</a>
                    </div>
                    <a className="p-2" href="#">SNKR Calendar</a>
                    <a className="p-2" href="#">Member access</a>
                    <button class="dropdown-btn" id="sidebar-2" onClick={handleMen}>Men
                        <i className="far fa-arrow-right"></i>
                    </button>
                    <div id="dropdown-container" className="dropdown-container pl-2" style={{display: isToggle2 ? 'block': 'none'}}>
                        <a className="py-1 px-2" href="#">Shoes</a>
                        <a className="py-1 px-2" href="#">Clothing</a>
                        <a className="py-1 px-2" href="#">Accessories and Equipment</a>
                        <a className="py-1 px-2" href="#">Trending</a>
                    </div>
                </div>           
            </div>
        
        </div>
    )
}

export default BottomHeader