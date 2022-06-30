import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
const OnePart = ({part}) => {

    const {name, description, img, minOrderQty, availableQty, price, _id} = part;
    const navigate= useNavigate();
    const goPurchase =(id)=>{
        navigate('/purchase/'+id);
    }

    return (
        <Fade left>
            <div className="card md:max-w-md bg-base-100 shadow-xl text-left">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="font-bold">MiniOrderQty: {minOrderQty}</h2>
                <h2 className="font-bold">AvailableQty: {availableQty}</h2>
                <h2 className="font-bold">Price: {price}</h2>
                <p>Description: {description}</p>
                
                <div className="card-actions justify-end">
                
                    <button onClick={()=> goPurchase(_id)} className="btn btn-primary w-full font-bold">Book Now</button>
                </div>
            </div>
        </div>
        </Fade>
    );
};

export default OnePart;