import React, { useEffect, useState } from 'react';
import Offer from './Offer/Offer';
import './Offering.css'

const Offering = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://macabre-mausoleum-77502.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Offer
                        key={service.id}
                        service={service}
                    ></Offer>)

                }
            </div>

        </div>
    );
};

export default Offering;