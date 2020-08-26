import React, { useState } from 'react';

import Close from "../../asset/img/icon/exit.svg";

import '../footer/Location.css';

function TopHeader() {
    const [classLocation, setClassLocation] = useState("Modal-location");

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
        { name: "Brasil", language: "Português"},
        { name: "Canada", language: "English"},
        { name: "Canada", language: "Français"},
        { name: "Chile", language: "Español"},
        { name: "México", language: "Español"},
        { name: "Puerto Rico", language: "Español"},
        { name: "United States", language: "English"},
        { name: "Estados Unidos", language: "Español"},
        { name: "Uruguay", language: "Español"},
        { name: "America Latina", language: "Español"},
    ]

    const handleOnLocation = (e) => {
        setClassLocation(classLocation + " Appear");
    }

    const handleCloseLocation = (e) => {
        setClassLocation("Modal-location");
    }
    return (
        <section id="top-header" className="text-secondary">
            <div className="border-bottom">
                <div className="d-inline-flex border-right">
                    <span className="py-2 px-3">Join Us</span>
                </div>
                <div className="d-inline-flex border-right">
                    <span className="py-2 px-4">
                        <i className="fas fa-bicycle"></i>
                    </span>
                </div>
                <div className="d-inline-flex float-right">
                    <span className="py-2 px-3 Location" onClick={handleOnLocation}>
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="ml-1">VietNam</span>
                    </span>
                </div> 
                <div className={classLocation} style={{height:'800px'}}>
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
                <div className="d-inline-flex float-right">
                    <span className="py-2 px-3">
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                </div>
                <div className="d-inline-flex float-right">
                    <span className="py-2 px-3">
                        Help
                    </span>
                </div>
            </div>
        </section>
    )
}

export default TopHeader