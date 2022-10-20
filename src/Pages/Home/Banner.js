import React from 'react';
import './Home.css'
import motoBanner from '../../image/banner-removebg-preview.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (

    <div>
      <div className="hero moto-banner-bg-style">
        <div class="lg:hero-overlay lg:bg-opacity-80"></div>
        <div className="hero-content flex-col lg:flex-row img-animation">
          <img src={motoBanner} className="w-72 lg:w-1/3 lg:my-7" alt='pic' />
          <div data-aos="fade-up" data-aos-duration="1000" className='mx-8'>
            <h1 className="text-5xl font-bold text-white"><span className='text-primary '>Moto Parts</span><br /> Manufacturer Factory</h1>
            <p className="py-6 lg:text-white">The provided products are manufactured <br /> by using superb quality raw materials and upgraded technique at our vendors’ end.</p>
            <button className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white">Get <Link to='/home'> Started</Link></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;