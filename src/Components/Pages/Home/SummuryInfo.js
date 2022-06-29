import React from 'react';
import CountUp from "react-countup";


const SummuryInfo = ({img, tittle, count, info}) => {
   
    return (
        <div className="card w-[100%]  bg-base-100 text-neutral-content mt-5 shadow-xl ">
      <div className="card-body items-center text-center text-black">
        <h2 className="card-title text-2xl">
          <img style={{width: "70px"}}  src={img} alt="" />
        </h2>
        <p className="text-5xl font-bold">
          <span>
            <CountUp end={count} duration={10} />
            {tittle}
          </span>
        </p>
        <p className='font-bold'> {info} </p>
      </div>
    </div>
    );
};

export default SummuryInfo;