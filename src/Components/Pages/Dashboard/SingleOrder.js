import React from 'react';

const SingleOrder = ({ order, setCancelOrder }) => {
    const { address, name, email, phone, quantity } = order;


const handleDelete = () => {

}

    return (
        <div class="card  bg-base-100 shadow-xl text-left">
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <h2 class="">Email: {email}</h2>
                <p>Phone: {phone}</p>
                <p>Order Qty: {quantity}</p>
                <p>Address: {address}</p>

                <div class="card-actions justify-between mt-2">
                    <label for="delete-confirm-modal" onClick={()=> setCancelOrder(order)} class="btn btn-xs btn-error">Cancel</label>
                    
                    <button class="btn btn-xs btn-success">Pay</button>

                </div>
            </div>
        </div>
    );
};

export default SingleOrder;