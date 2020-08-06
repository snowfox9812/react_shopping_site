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
    const handleClick = (e) => {
        var stateCheck = isToggle;
        // var dropdownCount = document.getElementsByClassName("dropdown-btn");
        // var i;
        // for (i = 0; i < dropdownCount.length; i++) {
        //     console.log(dropdownCount[i])
        //     dropdownCount[i].addEventListener("Click", function(){
        //         var dropdownContent = dropdownCount.nextElementSibling;
        //         if (dropdownContent.style.display == "block") {
        //             dropdownContent.style.display = "none"
        //         } else dropdownContent.style.display = "block";
        //     })
        // }
        if(stateCheck == false) {
            setToggle(true);
        } else setToggle(false);
      }
    
    return(
        <div className="border-bottom mx-2 position-relative">
            <div className="p-4 position-absolute">
                <i id="logo" class="fal fa-store "></i>
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
                    <i class="far fa-search"></i>
                    <input id="search-expand" className="border-0 ml-2" type="text" placeholder="Search" name="search" ></input>
                </form>
            </div>
            <div id="mobile-nav" className="p-4 float-right ">
                <button>
                    <i class="far fa-search"></i>
                </button>
                <button>
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button onClick={openNav}>
                    <i class="far fa-bars"></i>
                </button>
                <div id="mySidebar" className="sidebar">
                    <a className="p-2" href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                    <button class="dropdown-btn" onClick={handleClick}>My Account 
                        <i class="far fa-arrow-right"></i>
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
                    <button class="dropdown-btn" id="sidebar-2" onClick={handleClick}>Men
                        <i class="far fa-arrow-right"></i>
                    </button>
                    <div id="dropdown-container" className="dropdown-container pl-2" style={{display: isToggle ? 'block': 'none'}}>
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