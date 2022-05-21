import React from 'react';

const SummuryInfo = ({img, tittle, info}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl`}>
            <figure className='pl-5'>
                <img className='pt-5' src={img} alt="Album" />
            </figure>
            <div className="card-body text-black">
                <h2 className="card-title">{tittle}</h2>
                <p>{info}</p>
                
            </div>
        </div>
    );
};

export default SummuryInfo;