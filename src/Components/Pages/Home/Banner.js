import React from 'react';
import banner from '../../../assets/banner-tyre.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{background: `url(${banner})`}}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Wheel Car's</h1>
                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;