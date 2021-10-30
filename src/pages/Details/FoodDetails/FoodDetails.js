import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const FoodDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/foods')
            .then(res => setDetails(res?.data));
    }, []);

    const matchedIetem = details.find(dt => dt._id === id);

    // react hook form validation
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post(`http://localhost:5000/addOrder`, data)
            .then(res => {
                if (res?.data?.insertedId) {
                    alert('Order placed successfully!')
                }
            });
        
        reset();
    }

    return (
            <Container>
                <div className="text-center">
                    <h3>Details Information about this Food:</h3>
                    <h5>Name: {matchedIetem?.name} </h5>
                    <p> {matchedIetem?.description} </p>
                    <h4>Price: ${matchedIetem?.price} </h4>
                    <hr />

                    <h3>User Information:</h3>
                    <h5>User name: {user?.displayName} </h5>
                    <p>Email: {user?.email} </p>
                    <p>Food order id: {id} </p>
                </div>
                <hr />
                <div className="mb-5">
                <h3 className=" text-center">Want to purchase, Please fill this form</h3>
                
                {/* react hook form */}
                <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit(onSubmit)}>

                    <input className="w-50 mb-3" {...register("name", { required: true, maxLength: 20 })} defaultValue={user?.displayName} />

                    <input className="w-50 mb-3" {...register("email", { required: true })} defaultValue={user?.email} />

                    <input className="w-50 mb-3" type="number" {...register("phone", { required: true })} placeholder="Number" />
                    
                    <textarea className="w-50 mb-3" {...register("address", { required: true })} placeholder="Address" />

                    <input className="w-50 mb-3" {...register("foodName", { required: true })} defaultValue={matchedIetem?.name} />

                    <input className="w-50 mb-3" type="number" {...register("price", { required: true })} defaultValue={matchedIetem?.price} />
                    
                    <input className="w-50 btn btn-warning" type="submit" />
                    
                    </form>
                </div>

            </Container>
        
    );
};

export default FoodDetails;