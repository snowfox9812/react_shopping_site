import React from 'react';

function TopHeader() {
    return(
        <section id="top-header" className="text-secondary">
            <div className="border-bottom">
                <div className="d-inline-flex border-right">
                    <span className="py-2 px-3">Join Us</span>
                </div>
                <div className="d-inline-flex border-right">
                    <span className="py-2 px-4">
                        <i class="fas fa-bicycle"></i>
                    </span>
                </div>
                <div className="d-inline-flex float-right">
                    <span className="py-2 px-3">
                        <i class="fas fa-map-marker-alt"></i>
                        <span className="ml-1">VietNam</span>
                    </span>
                </div>
                <div className="d-inline-flex float-right">
                    <span className="py-2 px-3">
                        <i class="fas fa-shopping-cart"></i>
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