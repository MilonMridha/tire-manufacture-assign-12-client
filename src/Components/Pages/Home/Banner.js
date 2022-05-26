import React from 'react';
import banner from '../../../assets/banner-tyre.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ background: `url(${banner})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="md:max-w-md sm:col-span-1">
                    <h1 class="mb-5 text-6xl font-bold font-mono text-yellow-400">Here's</h1>
                    <p class="mb-5">Our Aim is to Provide Good Quality Products, Prompt Service Support with Long Vision Reliable Products
                    </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;