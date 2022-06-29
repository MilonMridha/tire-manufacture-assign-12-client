import React from 'react';
import Typed from "react-typed";
import banner from '../../../assets/banner-tyre.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ background: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="md:max-w-md sm:col-span-1">
                    <h1 className="mb-5 text-6xl font-bold font-mono text-yellow-400"> <Typed
                        strings={["Here's Our"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    /> </h1>
                    <p className="mb-5"> Aim is to Provide Good Quality Products, Prompt Service Support with Long Vision Reliable Products
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;