import React from 'react';
import './Home.css'
import motoBanner from '../../image/banner-removebg-preview.png'

const Banner = () => {
  return (

    <div className="hero moto-banner-bg-style">
      <div class="hero-overlay bg-opacity-80"></div>
      <div className="hero-content flex-col lg:flex-row">
        <img data-aos="zoom-in-down" data-aos-duration="1000" src={motoBanner} className="w-96 lg:max-w-sm rounded-lg " alt='pic' />
        <div data-aos="fade-up" data-aos-duration="1000" className='mx-8'>
          <h1 className="text-5xl font-bold text-white"><span className='text-primary '>Moto Parts</span><br /> Manufacturer Factory</h1>
          <p className="py-6 text-white">The provided products are manufactured <br /> by using superb quality raw materials and upgraded technique at our vendors’ end.</p>
          <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white">Get Started</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;