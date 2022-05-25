import React from 'react';
import { toast } from 'react-toastify';

const ManageModal = ({deleteItem, refetch,setDeleteItem }) => {
const {name, _id} = deleteItem

    const handleDelete = () =>{
        const url = `https://dry-sea-91165.herokuapp.com/parts/${_id}`;

                fetch(url, {
                    method: 'DELETE'
                }).then(res => res.json())
                .then(data => {
                    if(data.acknowledged === true){
                        toast.error('User Deleted Successfully')
                        }
                        refetch()
                        setDeleteItem(null)
                })
    }
    return (
        <div>
            <input type="checkbox" id="manage-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure want to delete {name}?</h3>
                    <p class="py-4"> You  lost your order permanently !! {_id} </p>
                    <div class="modal-action">

                        <button onClick={handleDelete}  class="btn btn-xs btn-error">Delete</button>

                        <label for="manage-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ManageModal;