import React from 'react';
import motoBanner from '../../image/banner-removebg-preview.png'

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row">
        <img src={motoBanner} class="max-w-sm rounded-lg shadow-2xl" alt='pic' />
        <div className='mx-8'>
          <h1 class="text-5xl font-bold">Moto Parts Manufacturer Factory</h1>
          <p class="py-6">The provided products are manufactured by using superb quality raw materials and upgraded technique at our vendors’ end.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;