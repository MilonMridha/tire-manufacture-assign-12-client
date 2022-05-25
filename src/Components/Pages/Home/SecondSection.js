import React from 'react';
import diagram from '../../../assets/diagram-2.jpg'

const SecondSection = () => {
    return (
        <div className='mt-10 shadow-lg'>
            <h2 className='text-4xl font-bold font-mono'>Diagram</h2>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img style={{width: '450px'}} src={diagram} className='rounded shadow-lg' />
                <div>
                    <h1 class="text-5xl font-bold font-mono">Wheel</h1>
                    <p class="py-6">A tire is a strong, flexible rubber casing attached to the rim of a wheel. Tires provide a gripping surface for traction and serve as a cushion for the wheels of a moving vehicle. Tires are found on automobile s, trucks, buses, aircraft landing gear, tractors and other farm equipment, industrial vehicles such as forklifts, and common conveyances such as baby carriages, shopping carts, wheel chairs, bicycles, and motorcycles.</p>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default SecondSection;