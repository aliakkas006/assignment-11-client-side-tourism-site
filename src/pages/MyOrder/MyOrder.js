import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        axios.get('https://guarded-hollows-00315.herokuapp.com/order')
            .then(res => setOrders(res?.data));
    }, [isDeleted]);

    const matchedOrders = orders.filter(order => order.email === user.email);

    // delete a order
    const handleDeleteOrder = (id) => {
        axios.delete(`https://guarded-hollows-00315.herokuapp.com/order/${id}`)
            .then(res => {
                if (res?.data?.deletedCount) {
                    alert('Order Deleted Successfully!');
                    setIsDeleted(true);
                } else {
                    setIsDeleted(false);
                }
            })
    }

    return (
        <div>
            <h2>This is your orders:</h2>
            <ul>
                {
                    matchedOrders.map(mo => <li key={mo._id}>
                        {mo.imgURL}
                        Food Name: {mo.foodName}
                        <br />
                        -- Price: ${mo.price}
                        <br />
                        <Button
                            onClick={()=> handleDeleteOrder(mo._id)}
                            className="p-0" variant="danger">Delete Order!</Button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyOrder;