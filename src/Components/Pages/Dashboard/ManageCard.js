import React from 'react';
import { toast } from 'react-toastify';

const ManageCard = ({item, refetch}) => {
    const {name, img, minOrderQty, availableQty, price, _id} = item;

    const handleDelete = () =>{
        const proceed = window.confirm('Do you want to delete user')
        if(proceed){
            const url = `http://localhost:5000/parts/${_id}`;

            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
                if(data.acknowledged === true){
                    toast.error('User Deleted Successfully')
                    }
                    refetch()
            })
            
        }

    }
    return (
        <div className="card md:max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>Available Qty: {availableQty}</p>
                    <p>Minimum Order: {minOrderQty}</p>
                    <p>Price: {price}</p>
                    <div className='flex items-center'>
                        <div className="avatar ">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{name}</h4>
                            
                        </div>
                    </div>
                    <button onClick={handleDelete} class="btn btn-xs btn-error mt-2">Delete</button>

                </div>
            </div>
    );
};

export default ManageCard;