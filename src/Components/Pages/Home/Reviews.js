import React from 'react';
import useReview from '../../../Hooks/ReviewHook';
import ReviewCard from './ReviewCard';
import Loading from '../Shared/Loading'
const Reviews = () => {
    const [reviews, isLoading] = useReview();

    if (isLoading === true){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl font-mono font-bold'>Client Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                {
                    reviews?.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;