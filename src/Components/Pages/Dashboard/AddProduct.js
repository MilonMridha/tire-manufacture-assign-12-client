import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const nameRef = useRef('');
    const minQtyRef = useRef('');
    const availQtyRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const urlRef = useRef('');

    const handleAddItem = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const minOrderQty = minQtyRef.current.value;
        const availableQty = availQtyRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const img = urlRef.current.value;

        const postItem = {
            name, minOrderQty, availableQty, description, price, img
        };
        console.log(postItem)
        fetch("http://localhost:5000/parts", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('Product added successfully');
                    event.target.reset()
                    return;
                }

            })

    }
    return (
        <div>
            <h2 className='text-2xl font-mono font-bold'>Add Product</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add Product</h2>
                    <form onSubmit={handleAddItem}>

                        <input ref={nameRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="name" id="" placeholder='Product Name' />

                        <input ref={minQtyRef} className='border-b-2 border-primary w-full p-3' type="text" placeholder='Minimum Order' id="" />

                        <input ref={availQtyRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="avilable" placeholder='Available quantity' id="" />

                        <input ref={descriptionRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="address" placeholder='Description' id="" />

                        <input ref={priceRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="price" placeholder='Price' id="" />

                        <input ref={urlRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="photo" placeholder='Image Url' id="" />

                        <div className=' flex justify-end mt-5'>
                            <input className='btn btn-primary rounded-none' type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;