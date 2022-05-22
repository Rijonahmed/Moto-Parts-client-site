import React from 'react';
import usePartsed from '../Hooks/usePartsed';
import useReviews from '../Hooks/useReviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import SixParts from './SixParts';
import ThreeReviews from './ThreeReviews';


const Home = () => {
  const [partsed] = usePartsed();
  const [reviews] = useReviews();

  const SixPartsed = partsed.slice(0, 6);
  const threeReviews = reviews.slice(0, 3);
  return (
    <div className='mx-12'>
      <Banner></Banner>
      <h1 className='text-center text-2xl my-10'>MOTO <span className='text-orange-500 font-bold'>PARTS</span></h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
          SixPartsed.map(parts => <SixParts
            key={parts._id}
            parts={parts}
          ></SixParts>)
        }
      </div>

      <BusinessSummary></BusinessSummary>

      <div className='my-8'>
        <h2 className='text-2xl font-bold text-center'>MOTO PARTS <span className='text-orange-500'>REVIEWS</span></h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          {
            threeReviews.map(review => <ThreeReviews
              key={review.id}
              review={review}
            ></ThreeReviews>)
          }
        </div>
      </div>


    </div>
  );
};

export default Home;