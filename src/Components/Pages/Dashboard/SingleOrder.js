import React from 'react';
import { Link } from 'react-router-dom';

const SingleOrder = ({ order, setCancelOrder }) => {
    const { address, name, email, phone, quantity, _id } = order;

console.log(order)
    

    return (
        <div className="card  bg-base-100 shadow-xl text-left">
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <h2 className="">Email: {email}</h2>
                <p>Phone: {phone}</p>
                <p>Order Qty: {quantity}</p>
                <p>Address: {address}</p>

                <div className="card-actions justify-between">
                    
                    {
                        !order.paid && <label for="delete-confirm-modal" onClick={() => setCancelOrder(order)} className="btn btn-xs btn-error">Cancel</label>
                    }
                    {
                        !order.paid && <Link to={`/dashboard/payment/${_id}`} className="btn btn-xs btn-success">Pay</Link>
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