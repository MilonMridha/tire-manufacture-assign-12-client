import React from 'react';


const ManageCard = ({item, refetch, setDeleteItem}) => {
    const {name, img, minOrderQty, availableQty, price, _id} = item;


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
                    <label for="manage-confirm-modal" onClick={() => setDeleteItem(item)} className="btn btn-xs btn-error mt-2">Delete</label>

                </div>
            </div>
    );
};

export default ManageCard;