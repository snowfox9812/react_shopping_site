import React, { useState } from 'react';

import './Location.css';

import Close from "../../asset/img/icon/exit.svg";

function Footer() {
    const [isToggle, setToggle] = useState(false);
    const [isToggle2, setToggle2] = useState(false);

    const [classLocation, setClassLocation] = useState("Modal-location");
    const [openAfrica, setOpenAfrica] = useState(false);
    const [openAmericas, setOpenAmericas] = useState(false);
    const [openAsia, setOpenAsia] = useState(false);
    const [openEurope, setOpenEurope] = useState(false);
    const [openMiddleEast, setOpenMiddleEast] = useState(false);

    const africa = [
        { name: "Egypt", language: "English" },
        { name: "Morocca", language: "English" },
        { name: "Maroc", language: "Français" },
        { name: "South Africa", language: "English" },
        { name: "Egypt", language: "English" },
        { name: "Morocca", language: "English" },
        { name: "Maroc", language: "Français" },
        { name: "South Africa", language: "English" }
    ]

    const americas = [
        { name: "Argentian", language: "Español" },
        { name: "Brasil", language: "Português" },
        { name: "Canada", language: "English" },
        { name: "Canada", language: "Français" },
        { name: "Chile", language: "Español" },
        { name: "México", language: "Español" },
        { name: "Puerto Rico", language: "Español" },
        { name: "United States", language: "English" },
        { name: "Estados Unidos", language: "Español" },
        { name: "Uruguay", language: "Español" },
        { name: "America Latina", language: "Español" },
    ]

    const handleOnLocation = (e) => {
        setClassLocation(classLocation + " Appear");
    }

    const handleCloseLocation = (e) => {
        setClassLocation("Modal-location");
    }
    const handleFooterGetHelp = (e) => {
        var stateCheck = isToggle;
        if (stateCheck == false) {
            setToggle(true);
        } else setToggle(false);
    }

    const handleFooterAbout = (e) => {
        var stateCheck = isToggle2;
        if (stateCheck == false) {
            setToggle2(true);
        } else setToggle2(false);
    }

    const handleOpenAfrica = (e) => {
        let temp = openAfrica;
        setOpenAfrica(!temp);
    }

    const handleOpenAmericas = (e) => {
        let temp = openAmericas;
        setOpenAmericas(!temp);
    }

    const handleOpenAsia = (e) => {
        let temp = openAsia;
        setOpenAsia(!temp);
    }

    const handleOpenEurope = (e) => {
        let temp = openEurope;
        setOpenEurope(!temp);
    }

    const handleOpenMiddleEast = (e) => {
        let temp = openMiddleEast;
        setOpenMiddleEast(!temp);
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

                    <div id="social-network" className="col-3 float-right">
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
                                <span className="Location" onClick={handleOnLocation}>
                                    <a className="text-white" href="#">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </a>
                                    <span className="ml-2">VietNam</span>
                                </span>
                                <span className="ml-4">© 2020 Nike, Inc. All Rights Reserved</span>
                            </span>
                        </div>

                        <div className={classLocation}>
                            <span className="Close-modal" onClick={handleCloseLocation}><img src={Close} /></span>
                            <div className="Content">
                                <h1>Select your Location</h1>
                                <h2>Africa</h2>
                                <div className="Africa row">
                                    {africa.map((item, index) => (
                                        <div key={index} className="Nation col-md-3">
                                            <i className="fas fa-map-marker-alt Pin"></i>
                                            <span className="Sub-nation">
                                                <div className="Name">{item.name}</div>
                                                <div className="Language">{item.language}</div>
                                            </span>
                                        </div>
                                    ))
                                    }
                                </div>
                                <h2>Americas</h2>
                                <div className="Africa row">
                                    {americas.map((item, index) => (
                                        <div key={index} className="Nation col-md-3">
                                            <i className="fas fa-map-marker-alt Pin"></i>
                                            <span className="Sub-nation">
                                                <div className="Name">{item.name}</div>
                                                <div className="Language">{item.language}</div>
                                            </span>
                                        </div>
                                    ))
                                    }
                                </div>
                                <h2>Asia Pacific</h2>
                                <div className="Africa row">
                                    {africa.map((item, index) => (
                                        <div key={index} className="Nation col-md-3">
                                            <i className="fas fa-map-marker-alt Pin"></i>
                                            <span className="Sub-nation">
                                                <div className="Name">{item.name}</div>
                                                <div className="Language">{item.language}</div>
                                            </span>
                                        </div>
                                    ))
                                    }
                                </div>
                                <h2>Europe</h2>
                                <div className="Africa row">
                                    {africa.map((item, index) => (
                                        <div key={index} className="Nation col-md-3">
                                            <i className="fas fa-map-marker-alt Pin"></i>
                                            <span className="Sub-nation">
                                                <div className="Name">{item.name}</div>
                                                <div className="Language">{item.language}</div>
                                            </span>
                                        </div>
                                    ))
                                    }
                                </div>
                                <h2>Middle East</h2>
                                <div className="Africa row">
                                    {africa.map((item, index) => (
                                        <div key={index} className="Nation col-md-3">
                                            <i className="fas fa-map-marker-alt Pin"></i>
                                            <span className="Sub-nation">
                                                <div className="Name">{item.name}</div>
                                                <div className="Language">{item.language}</div>
                                            </span>
                                        </div>
                                    ))
                                    }
                                </div>

                            </div>
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
                        <button class="dropdown-btn w-100" id="sidebar-2" onClick={handleFooterGetHelp}>
                            <span className="text-white float-left">Get Help</span>
                            <span className="float-right">
                                <i class="fal fa-plus"></i>
                            </span>
                        </button>
                        <div id="dropdown-container" className="dropdown-container pl-2" style={{ display: isToggle ? 'block' : 'none' }}>
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
                        <button class="dropdown-btn w-100" id="sidebar-2" onClick={handleFooterAbout}>
                            <span className="text-white float-left">About</span>
                            <span className="float-right">
                                <i class="fal fa-plus"></i>
                            </span>
                        </button>
                        <div id="dropdown-container" className="dropdown-container pl-2" style={{ display: isToggle2 ? 'block' : 'none' }}>
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
                <div id="footer-end-mobile" className="border border-secondary">
                    <div id="social-network" className="p-3">
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
                            <span className="Location" onClick={handleOnLocation}>
                                <a className="text-white" href="#">
                                    <i class="fas fa-map-marker-alt"></i>
                                </a>
                                <span className="ml-2">VietNam</span>
                            </span>
                            <span className="ml-4">© 2020 Nike, Inc. All Rights Reserved</span>
                        </span>
                    </div>

                    <div className={classLocation}>
                        <span className="Close-modal" onClick={handleCloseLocation}><img src={Close} /></span>
                        <div className="Content">
                            <h1>Select your Location</h1>
                            <h2 onClick={handleOpenAfrica}>Africa</h2>
                            <div className="Africa row">
                                {africa.map((item, index) => (
                                    <div key={index} className="Nation col-md-3" style={{display: openAfrica ? "block" : "none"}}>
                                        <i className="fas fa-map-marker-alt Pin"></i>
                                        <span className="Sub-nation">
                                            <div className="Name">{item.name}</div>
                                            <div className="Language">{item.language}</div>
                                        </span>
                                    </div>
                                ))
                                }
                            </div>
                            <h2 onClick={handleOpenAmericas}>Americas</h2>
                            <div className="Africa row">
                                {americas.map((item, index) => (
                                    <div key={index} className="Nation col-md-3" style={{display: openAmericas ? "block" : "none"}}>
                                        <i className="fas fa-map-marker-alt Pin"></i>
                                        <span className="Sub-nation">
                                            <div className="Name">{item.name}</div>
                                            <div className="Language">{item.language}</div>
                                        </span>
                                    </div>
                                ))
                                }
                            </div>
                            <h2 onClick={handleOpenAsia}>Asia Pacific</h2>
                            <div className="Africa row">
                                {africa.map((item, index) => (
                                    <div key={index} className="Nation col-md-3" style={{display: openAsia ? "block" : "none"}}>
                                        <i className="fas fa-map-marker-alt Pin"></i>
                                        <span className="Sub-nation">
                                            <div className="Name">{item.name}</div>
                                            <div className="Language">{item.language}</div>
                                        </span>
                                    </div>
                                ))
                                }
                            </div>
                            <h2 onClick={handleOpenEurope}>Europe</h2>
                            <div className="Africa row">
                                {africa.map((item, index) => (
                                    <div key={index} className="Nation col-md-3" style={{display: openEurope ? "block" : "none"}}>
                                        <i className="fas fa-map-marker-alt Pin"></i>
                                        <span className="Sub-nation">
                                            <div className="Name">{item.name}</div>
                                            <div className="Language">{item.language}</div>
                                        </span>
                                    </div>
                                ))
                                }
                            </div>
                            <h2 onClick={handleOpenMiddleEast}>Middle East</h2>
                            <div className="Africa row">
                                {africa.map((item, index) => (
                                    <div key={index} className="Nation col-md-3" style={{display: openMiddleEast ? "block" : "none"}}>
                                        <i className="fas fa-map-marker-alt Pin"></i>
                                        <span className="Sub-nation">
                                            <div className="Name">{item.name}</div>
                                            <div className="Language">{item.language}</div>
                                        </span>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
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