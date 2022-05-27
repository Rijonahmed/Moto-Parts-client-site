import React from 'react';
import motoBanner from '../../image/banner-removebg-preview.png'

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={motoBanner} className="max-w-sm rounded-lg shadow-2xl" alt='pic' />
        <div className='mx-8'>
          <h1 className="text-5xl font-bold">Moto Parts Manufacturer Factory</h1>
          <p className="py-6">The provided products are manufactured by using superb quality raw materials and upgraded technique at our vendors’ end.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;