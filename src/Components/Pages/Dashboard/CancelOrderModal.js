import React from 'react';

const CancelOrderModal = ({cancelOrder}) => {
    const {name, email} = cancelOrder;

    const handleDelete =() =>{
        const url = `http://localhost:5000/order/${email}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res => res.json())
        .then(data => {
            console.log(data)
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