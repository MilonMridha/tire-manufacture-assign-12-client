import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flip from 'react-reveal/Flip';

const ReviewCard = ({ review }) => {
    const { name, reviews, ratting, img } = review;
    return (
        <Flip left>
            <div>
            <div className="card md:max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{reviews}</p>
                    <div className='flex items-center mt-10'>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{name}</h4>
                            <p>Ratting: <Rating
                        initialRating={ratting}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </Flip>
    );
};

export default ReviewCard;