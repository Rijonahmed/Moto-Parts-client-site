import React from 'react';
import usePartsed from '../Hooks/usePartsed';
import useReviews from '../Hooks/useReviews';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Rechart from './Rechart';
import SixParts from './SixParts';
import ThreeReviews from './ThreeReviews';


const Home = () => {
  const [partsed] = usePartsed();
  const [reviews] = useReviews();

  const SixPartsed = partsed.slice(0, 6);

  return (
    <div className='mx-12'>
      <Banner></Banner>
      <h1 className='text-center text-2xl mb-10'>MOTO <span className='text-orange-500 font-bold'>PARTS</span></h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          SixPartsed.map(parts => <SixParts
            key={parts._id}
            parts={parts}
          ></SixParts>)
        }
      </div>

      <BusinessSummary></BusinessSummary>


      <div className='hidden lg:block'>
        <Rechart></Rechart>
      </div>

      <div>
        <h1 className='text-center text-3xl font-bold'>About</h1>
        <About></About>
      </div>





      <div className='my-8'>
        <h2 className='text-2xl font-bold text-center'>MOTO PARTS <span className='text-orange-500'>REVIEWS</span></h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {
            reviews.map(review => <ThreeReviews
              key={review._id}
              review={review}
            ></ThreeReviews>)
          }
        </div>
      </div>


    </div>
  );
};

export default Home;