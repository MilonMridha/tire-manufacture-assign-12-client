import React from 'react';
import SummuryInfo from './SummuryInfo';

const BussinesSummury = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-2 px-5'>
            <SummuryInfo></SummuryInfo>
            <SummuryInfo></SummuryInfo>
            <SummuryInfo></SummuryInfo>
            <SummuryInfo></SummuryInfo>
        </div>
    );
};

export default BussinesSummury;