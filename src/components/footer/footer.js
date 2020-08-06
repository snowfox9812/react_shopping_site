import React, { useState, setState } from 'react';  

function Footer() {
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
    
    return (
        <div id="footer">
            <div id="footer-lg" className="footer-content">
                <div className="row p-5">
                    <div className="col-3">
                        <ul>
                            <li>
                                <a className="text-white mb-2" href="#">FIND A STORE</a>
                            </li>
                            <li>
                                <a className="text-white mb-2" href="#">BECOME A MEMBER</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul>
                            <li>
                                <a className="text-white" href="#">GET HELP</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Order Status</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Delivery</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Return</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Payment Options</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Contact Us</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-3">
                        <ul>
                            <li>
                                <a className="text-white" href="#">GET HELP</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Order Status</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Delivery</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Return</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Payment Options</a>
                            </li>
                            <li>
                                <a className="text-white-50" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                       
                    <div id= "social-network" className="col-3 float-right">
                        <a className="text-white-50 ml-3" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a className="text-white-50 ml-3" href="#">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a className="text-white-50 ml-3" href="#">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a className="text-white-50 ml-3" href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div id="footer-end" className="border-top border-secondary px-5 py-3">
                    <div className="row">
                        <div className="col-6">
                            <span className="text-white-50">
                                <a className="text-white" href= "#">
                                    <i class="fas fa-map-marker-alt"></i>
                                </a>
                                <span className="ml-2">VietNam</span>
                                <span className="ml-4">© 2020 Nike, Inc. All Rights Reserved</span>
                            </span>
                            
                        </div>
                        <div className="col-6 ">
                            <span className="float-right">
                                <span>
                                    <a className="text-white-50 mx-2">Guides</a>
                                </span>
                                <span>
                                    <a className="text-white-50 mx-2">Terms of Sale</a>
                                </span>
                                <span>
                                    <a className="text-white-50 mx-2">Terms of Use</a>
                                </span>
                                <span>
                                    <a className="text-white-50 mx-2">Privacy and Policy  </a>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer-sm">
                <div className="p-3">
                    <div className="mb-2">
                        <a className="text-white" href="#">FIND A STORE</a>
                    </div>
                    <div className="mb-2">
                        <a className="text-white" href="#">BECOME A MEMBER</a>
                    </div>
                </div>
                <div className="border border-secondary">
                    <div className="p-3">
                        <button class="dropdown-btn w-100" id="sidebar-2" onClick={handleClick}>
                            <span className="text-white float-left">Get Help</span>
                            <span className="float-right">
                                <i class="fal fa-plus"></i>
                            </span>
                        </button>
                        <div id="dropdown-container" className="dropdown-container pl-2" style={{display: isToggle ? 'block': 'none'}}>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Order Status</a>
                            </div>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Delivery</a>
                            </div>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Return</a>
                            </div>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Payment Options</a>
                            </div>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <button class="dropdown-btn w-100" id="sidebar-2" onClick={handleClick}>
                            <span className="text-white float-left">About</span>
                            <span className="float-right">
                                <i class="fal fa-plus"></i>
                            </span>
                        </button>
                        <div id="dropdown-container" className="dropdown-container pl-2" style={{display: isToggle ? 'block': 'none'}}>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">News</a>
                            </div>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Carriers</a>
                            </div>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Investors</a>
                            </div>
                            <div>
                                <a className="py-1 px-2 text-white-50" href="#">Subtainability</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id= "footer-end-mobile" className="border border-secondary">
                    <div id= "social-network" className="p-3">
                        <a className="text-white-50" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a className="text-white-50 ml-3" href="#">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a className="text-white-50 ml-3" href="#">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a className="text-white-50 ml-3" href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="p-3">
                        <span className="text-white-50">
                            <a className="text-white" href= "#">
                                <i class="fas fa-map-marker-alt"></i>
                            </a>
                            <span className="ml-2">VietNam</span>
                            <span className="ml-4">© 2020 Nike, Inc. All Rights Reserved</span>
                        </span>
                    </div>
                    <div className="p-3">
                        <div className="py-2">
                            <a className="text-white-50 mx-2">Guides</a>
                        </div>
                        <div className="py-2">
                            <a className="text-white-50 mx-2">Terms of Sale</a>
                        </div>
                        <div className="py-2">
                            <a className="text-white-50 mx-2">Terms of Use</a>
                        </div>
                        <div className="py-2">
                            <a className="text-white-50 mx-2">Privacy and Policy  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;