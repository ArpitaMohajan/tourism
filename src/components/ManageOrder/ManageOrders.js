import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
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
                    orders.map(order => <ManageOrder
                        key={order.id}
                        order={order}
                    >

                    </ManageOrder>)

                }
            </div>
        </div>
    );
};

export default ManageOrders;
