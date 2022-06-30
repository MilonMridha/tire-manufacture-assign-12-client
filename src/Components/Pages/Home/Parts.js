import React from 'react';
import useHook from '../../../Hooks/Hook';
import Loading from '../Shared/Loading';
import OnePart from './OnePart';

const Parts = () => {
    const [parts, isLoading] = useHook();

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mt-5 font-mono font-bold'>Products</h2>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
           {
                parts?.map(part=> <OnePart
                key={part._id}
                part={part}
                ></OnePart>)
            }
           </div>
        </div>
    );
};

export default Parts;