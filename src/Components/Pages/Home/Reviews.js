import React from 'react';
import useReview from '../../../Hooks/ReviewHook';
import ReviewCard from './ReviewCard';
import Loading from '../Shared/Loading'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Reviews = () => {
    const [reviews] = useReview();


    if (!reviews.length) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl font-mono font-bold'>Client Reviews</h2>
            <Swiper
                slidesPerView={10}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 mb-5'>
                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>
                            <ReviewCard

                                review={review}
                            ></ReviewCard>
                        </SwiperSlide>
                        )}
                </div>
            </Swiper>



        </div>
    );
};

export default Reviews;