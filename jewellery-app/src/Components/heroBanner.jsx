import React from "react";
import herobg from '../assets/images/banner/hero-ring.png';

function HeroBanner() {
    return (
        <>
            <section className="hero-banner position-relative">
                <img src={herobg} alt="hero-bg"/>
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <div className="hero-content">
                                <div className="hero-title title-font mb-5">
                                    <h1 className="text-uppercase m-0">
                                        Earrings <span>Look</span>
                                    </h1>
                                    <p className="snd-font text-uppercase fw-bold">
                                        Designed for luxrio unique shop
                                    </p>
                                </div>
                                <a href="#" className="text-decoration-none bg-black snd-font py-3 px-5 text-white">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner;