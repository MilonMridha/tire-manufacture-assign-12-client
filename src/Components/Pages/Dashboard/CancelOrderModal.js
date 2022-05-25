import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({cancelOrder, refetch, setCancelOrder}) => {
    const {name, email} = cancelOrder;

    const handleDelete =() =>{
        const url = `https://dry-sea-91165.herokuapp.com/order/${email}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                toast.success('Order Cancelled Successfully')
            }
            refetch()
            console.log(data)
            setCancelOrder(null)

        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure want to delete {name} ?</h3>
                    <p class="py-4">{name} You  lost your order permanently!!  </p>
                    <div class="modal-action">

                        <button onClick={handleDelete}  class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CancelOrderModal;