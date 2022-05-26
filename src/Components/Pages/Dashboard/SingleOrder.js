import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({ order, setCancelOrder }) => {
    const { address, name, email, phone, quantity, _id } = order;

console.log(order)
    

    return (
        <div class="card  bg-base-100 shadow-xl text-left">
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <h2 class="">Email: {email}</h2>
                <p>Phone: {phone}</p>
                <p>Order Qty: {quantity}</p>
                <p>Address: {address}</p>

                <div class="card-actions justify-between">
                    
                    {
                        !order.paid && <label for="delete-confirm-modal" onClick={() => setCancelOrder(order)} class="btn btn-xs btn-error">Cancel</label>
                    }
                    {
                        !order.paid && <Link to={`/dashboard/payment/${_id}`} class="btn btn-xs btn-success">Pay</Link>
                    }
                    {
                        order.paid &&
                        <div>
                            <p><span className='text-success'>Paid</span></p>
                            <p>Transaction Id: <br /><small className='text-success pr-2 text-left pl-0'> {order.transactionId}</small></p>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleOrder;