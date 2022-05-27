import React from 'react';

const About = () => {
  return (
    <div>

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl">
        <div>
          <h1 className='text-xl font-bold text-center my-8'>Moto <span className='text-orange-500'>parts</span> About US</h1>
          <p className='text-xl ml-8'>Moto Parts The provided products are manufactured by using superb quality raw materials and upgraded technique at our vendors’ end.</p>
        </div>
        <div className="text-xl font-bold text-center my-8">
          <h2 >Contact US</h2>
          <p>Email : <big>moto-parts@gmail.com</big></p>
          <p>Phone : <big>0909578694</big></p>
          <p>Address : <big>Prubachal sector-2/road-301,Dhaka</big></p>



        </div>
      </div>

    </div>
  );
};

export default About;