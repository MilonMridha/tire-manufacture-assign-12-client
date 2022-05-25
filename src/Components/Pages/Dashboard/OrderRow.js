import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({order, index, refetch}) => {
    const {name, email, paid, quantity, _id, status } = order;

    const handleDelete = () => {
        const proceed = window.confirm('Do you want to delete');
        if (proceed) {
            const url = `http://localhost:5000/order/${email}`;

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.acknowledged === true) {
                        toast.success('Deleted Successfully')
                        refetch()
                    } 

                });
        }
    }


    const handlePatch = () =>{
        fetch(`http://localhost:5000/shipped-order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    
                },
                

            }).then(res => res.json()).then(data => {
                if (data) {
                    
                    toast.success('Shipped Successfully')
                }
                refetch()
                
            })
    }

    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{quantity}</td>
        <td>{ paid !== true && <button className="btn btn-xs text-white">unpaid</button>}
        {
            paid === true && status !== true  && <button onClick={handlePatch} className="btn btn-xs btn-success">Pending</button>
        }

        </td>
        <td>{paid !== true && <button onClick={handleDelete} className="btn btn-xs btn-error text-black">Delete</button>}
        {
            status === true && <span className='font-bold font-mono'>Shipped</span>
        }
        </td>
        
    </tr>
    );
};

export default OrderRow;