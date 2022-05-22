import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);

    const { id } = useParams();
    const [detail, setDetail] = useState({});
    const { name, description, img, minOrderQty, availableQty, price, _id } = detail;

    const [productQty, setProductQty] = useState(availableQty);

    useEffect(() => {
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [productQty]);

    const emailRef = useRef('');
    const nameRef = useRef('');
    const addressRef = useRef('');
    const phoneRef = useRef('');
    const quantityRef = useRef('');

    
    const handleOrder = (event) =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const quantity = quantityRef.current.value;

        const newOrder = {email, name, address, phone, quantity};


           
        if (parseInt(quantity) < parseInt(minOrderQty)) {
            return toast.error('Your quantity below the minimum order')
        }
        if (parseInt(quantity) > parseInt(availableQty)) {
            return toast.error('Your order can not be higher than the available quantity')
        }

        const newAvailableQty = parseInt(availableQty) - parseInt(quantity);

        const updateQty = {newAvailableQty};
        
        // put method for quantity
        const url = `http://localhost:5000/parts/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQty)
        })
        .then(res => res.json())
        .then(data => {
            setProductQty(updateQty);

            //post method for order collection
            fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Order added successfully');
                    event.target.reset()
                    return;
                }

            })
        });
        
    }



    return ( 
        <div className='flex justify-center mt-10 p-5 gap-5'>
                <div class="card md:max-w-md bg-base-100 shadow-xl text-left">
                    <figure>
                        <img className='rounded-full' style={{ width: '200px' }} src={img} alt="part" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Name: {name}</h2>
                        <h2 class="font-bold">MiniOrderQty: {minOrderQty}</h2>
                        <h2 class="font-bold">AvailableQty: {availableQty}</h2>
                        <h2 class="font-bold">Price: {price}</h2>
                        <p>Description: {description}</p>

                    </div>
                </div>
                
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Your Order</h2>
                            <form onSubmit={handleOrder}>
                                <input ref={emailRef} disabled className='border-b-2 border-primary w-full p-3' type="text" name="email" value={user?.email} id="" />

                                <input ref={nameRef} disabled className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="name" value={user?.displayName} id="" />
                                <input ref={addressRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="address" placeholder='Address' id="" />

                                <input ref={phoneRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="phone" placeholder='Phone' id="" />

                                <input ref={quantityRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="quantity" placeholder='Quantity' id="" />

                                <div className=' flex justify-end mt-5'>
                                    <input className='btn btn-primary rounded-none' type="submit" value="Order" />
                                </div>
                            </form>
                        </div>
                    </div>
                
            </div>
    );
};

export default Purchase;