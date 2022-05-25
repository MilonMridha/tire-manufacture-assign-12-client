import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const AdReview = () => {

const rattingRef = useRef('');
const commentRef = useRef('');
const photoRef = useRef('');

    const handleReviews = (event) =>{
        event.preventDefault();
    const ratting = rattingRef.current.value;
    const reviews = commentRef.current.value;
    const img = photoRef.current.value;

    const newReview = {ratting, reviews, img}

    fetch("https://dry-sea-91165.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Review added successfully');
                    event.target.reset()
                    return;
                }

            });

    }
    return (
        <div>
            <h2 className='text-2xl font-mono font-bold'>Add Your Review</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Your Review</h2>
                            <form onSubmit={handleReviews}>
                                

                                <input required ref={rattingRef}  className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="ratting" placeholder='Ratting' id="" />

                                <input required ref={commentRef} className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="comment" placeholder='Your comment' id="" />

                                <input required ref={photoRef}  className='border-b-2 border-primary w-full p-3 mt-2' type="text" name="img" placeholder='Your photo url' id="" />

                                <div className=' flex justify-end mt-5'>
                                    <input className='btn btn-primary btn-sm rounded-none' type="submit" value="Add Review" />
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
    );
};

export default AdReview;