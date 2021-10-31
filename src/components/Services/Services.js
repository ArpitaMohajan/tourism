import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Services.css'

const Services = () => {


    const [abos, setAbos] = useState([]);
    const [allAbos, setAllAbos] = useState([]);
    useEffect(() => {
        fetch(
            'https://macabre-mausoleum-77502.herokuapp.com/addOffer'
        )
            .then((res) => res.json())
            .then((data) => setAllAbos(data));
    }, [abos]);
    return (
        <div >
            <h2>Review</h2>
            <div className="bodys">
                <div className="row">
                    {allAbos?.map((pd) => (
                        <div className="col-md-4">
                            <div className="cart ">
                                <div className="cart-details">

                                    <img className="w-50 p-1  rounded-circle" src={pd.img} alt="" />
                                    <div>
                                        <p>{pd.description}</p>


                                    </div>
                                    <div class="star-info text-center">
                                        <div>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star folled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star empty"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;