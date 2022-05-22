import React from 'react';
import motoBanner from '../../image/banner-removebg-preview.png'

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={motoBanner} class="max-w-sm rounded-lg shadow-2xl" alt='pic' />
        <div>
          <h1 class="text-5xl font-bold">Moto Parts Manufacturer Factory</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;