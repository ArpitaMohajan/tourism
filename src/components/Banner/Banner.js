import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="header-container ">
            <div className="">
                <div className="row d-flex header align-items-center justify-content-center">

                    <div className="col-md-6">
                        <h1 className="title">
                            HERE IS OUR  <br /> SAINT MARTIN TOUR
                        </h1>
                        <p className="text-white text-center mt-3">
                            Enjoy This Place.
                        </p>
                        <button className="mt-3 about-btn">About</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>

    );
};



export default Banner;


