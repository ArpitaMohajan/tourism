import React from 'react';
import './AboutPlace.css'
const AboutPlace = () => {
    return (
        <div className='About-Me flexible-container'>
            <div className="half-width">
                <img className='w-100' src="https://th.bing.com/th/id/OIP.aoc3WFPbXtnN3cm3OCW2gwHaEy?pid=ImgDet&rs=1" alt="" />
            </div>
            <div className="half-width">
                <h1>Enjoyable Place</h1>


                <p>In 1890, some Bengali and Rakhine people settled on this island. As far as it is known, 13 families settled in the northern part of the island as the first inhabitants. At present, there are about 7,000 people on the island of St. Martin (According to the 2006 estimation). Most people live in the northern part of the island of St. Martin. The main occupation of this island is fishing and the main crop of rice and coconut. The island is locally known as Narikel Jinjira because there are plenty of coconut trees on the island of St. Martin..</p>
                <a className="link-button" target="_Button" href="https://www.facebook.com/">Contact
                    Us</a>

            </div>
        </div>
    );
};

export default AboutPlace;