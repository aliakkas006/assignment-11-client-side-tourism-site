import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://guarded-hollows-00315.herokuapp.com/addFood', data)
            .then(res => {
                if (res?.data?.insertedId) {
                    alert('Added Food Successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="mb-5">
            <h4 className="text-center my-5">Add a new Service</h4>

            <form
                className="d-flex flex-column justify-content-center align-items-center"
                onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50 mb-3 p-1" {...register("name", { required: true })} placeholder="Enter food name" />
                
                <textarea className="w-50 mb-3" {...register("description", { required: true })} placeholder="Description" />

                <input className="w-50 mb-3 p-1" type="number" {...register("price", { required: true })} placeholder="Price" />

                <input className="w-50 btn btn-warning text-light" type="submit" />
            </form>
            
        </div>
    );
};

export default AddService;