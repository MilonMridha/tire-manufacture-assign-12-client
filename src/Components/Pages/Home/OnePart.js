import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OnePart = ({part}) => {

    const {name, description, img, minOrderQty, availableQty, price, _id} = part;
    const navigate= useNavigate();
    const goPurchase =(id)=>{
        navigate('/purchase/'+id);
    }

    return (
        <div class="card md:max-w-md bg-base-100 shadow-xl text-left">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <h2 class="font-bold">MiniOrderQty: {minOrderQty}</h2>
                <h2 class="font-bold">AvailableQty: {availableQty}</h2>
                <h2 class="font-bold">Price: {price}</h2>
                <p>Description: {description}</p>
                
                <div class="card-actions justify-end">
                
                    <button onClick={()=> goPurchase(_id)} class="btn btn-primary w-full font-bold">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default OnePart;