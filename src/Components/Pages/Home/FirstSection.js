import React from 'react';
import section from '../../.././assets/section-1.jpg'

const FirstSection = () => {
    return (
        <div className='shadow-lg mt-5'>
            <h3 className='text-4xl font-bold font-mono py-0'>Manufacturer</h3>
            <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{width: '450px', height: '400px'}} className='rounded shadow-lg' src={section} />
                <div>
                    <h1 className="text-5xl font-bold font-mono">Rubber for Tire</h1>
                    <p className="py-6">60% of rubber used in the tire industry is synthetic rubber, produced from petroleum-derived hydrocarbons, although natural rubber is still necessary for the remaining 40%.Synthetic elastomers deform under stress and return to their original shape when the stress is removed hysteresis.This property is extremely valuable for the manufacture of high-grip tires. Synthetic rubber also provides other specific properties, most notably in the areas of longevity and rolling resistance. It’s mainly used for passenger car and motorcycle tire as it gives them good grip performances.

</p>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default FirstSection;