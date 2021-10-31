import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        axios.get('https://guarded-hollows-00315.herokuapp.com/order')
            .then(res => setAllOrders(res.data));
    }, [isDeleted]);

    // delete order by user
    const handleDeleteOrder = (id) => {
        axios.delete(`https://guarded-hollows-00315.herokuapp.com/order/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    alert('Order Deleted Successfully!');
                    setIsDeleted(true);
                } else {
                    setIsDeleted(false);
                }
            });
    }

    return (
        <Container>
            <h2 className="text-center my-5">Manage all order by customer</h2>
            <div className="d-flex justify-content-center mb-5">
                <div className="w-50">
                    {
                        allOrders.map(fd => <li
                            className="border border-primary mb-3 p-5 text-center"
                            key={fd._id}>
                            Food name: {fd.foodName}
                            <br />
                            Price: ${fd.price}
                            <br />
                            Order by: {fd.name}
                            <br />
                            Email: {fd.email}
                            <br />
                            <Button
                                onClick={()=> handleDeleteOrder(fd._id)}
                                className="p-0" variant="danger">Delete Order!</Button>
                        </li>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default ManageAllOrder;