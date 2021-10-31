

import './AddService.css'
import React, { useEffect, useState } from 'react';
import AddServices from '../AddServices/AddServices';
// import AddServices from '../../AddServices/AddServices';
// import Booking from '../Booking/Booking/Booking';

const AddService = () => {

    const [orders, setOrders] = useState([])

    const [error, setError] = useState(false)
    useEffect(() => {
        fetch("https://macabre-mausoleum-77502.herokuapp.com/orders")
            .then(res => res.json())
            .then(result => setOrders(result))

            .catch(err => setError(true))
    }, [])


    return (
        <div>
            <h2 className="text-primary mt-5">Our orders</h2>
            <div className="order-container">
                {
                    orders.map(order => <AddServices
                        key={order.id}
                        order={order}
                    >

                    </AddServices>)

                }
            </div>
        </div>
    );
};

export default AddService;