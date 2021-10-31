
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddOffer.css'
const AddOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://macabre-mausoleum-77502.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
                console.log(res)
            })
    };

    return (
        <div className="add-service ">
            <h2>Add New Service</h2>
            <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 80 })} placeholder="name" />
                <br />
                <textarea {...register("description")} placeholder="description" />
                <br />
                <input type="number" {...register("price")} placeholder="price" />
                <br />
                <input {...register("img")} placeholder="img" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddOffer;