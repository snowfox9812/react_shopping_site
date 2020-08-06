import React from 'react';

function Footer() {
    return (
        <div id="footer">
            <div className="footer-content">
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
                <div className="border-top border-secondary px-5 py-3">
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
        </div>
    );
}

export default Footer;