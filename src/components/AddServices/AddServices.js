import React, { useEffect, useState } from 'react';
// import './AddServices.css';
import { Link } from 'react-router-dom';

const AddServices = ({ order }) => {
    // const {service} = props;
    const { _id, email, name, price, address, img } = order;

    return (
        <div className=" pb-3">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h5>price: {price}</h5>
            <p className="px-3">{address}</p>
            <Link to={`/addService/${_id}`}>
                {/* <button onClick={() => handleDelete(order._id)} className="btn btn-warning">Delete</button> */}
            </Link>
        </div>
    );
};

export default AddServices;