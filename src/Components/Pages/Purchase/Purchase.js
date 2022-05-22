import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const { name, description, img, minOrderQty, availableQty, price, _id } = detail;

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])
    return (
        <div className='flex justify-center mt-10'>
            <div class="card md:max-w-md bg-base-100 shadow-xl text-left">
            <figure>
                <img className='rounded-full' style={{width: '200px'}} src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <h2 class="font-bold">MiniOrderQty: {minOrderQty}</h2>
                <h2 class="font-bold">AvailableQty: {availableQty}</h2>
                <h2 class="font-bold">Price: {price}</h2>
                <p>Description: {description}</p>

            </div>
        </div>
        </div>
    );
};

export default Purchase;