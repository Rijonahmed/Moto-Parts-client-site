import React from 'react';
import revenue from '../../image/icon/revenue.png'
import review from '../../image/icon/review.png'
import parts from '../../image/icon/parts.png'

const BusinessSummary = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5'>
      <div class="card card-compact max-w-max bg-base-100 shadow-xl">
        <figure><svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg></figure>
        <div class="card-body">
          <h2 class="card-title">We served <span className='text-orange-400'>100+</span> customers</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">

          </div>
        </div>
      </div>
      <div class="card card-compact max-w-max bg-base-100 shadow-xl">
        <figure><img className="h-28 w-28" src={revenue} alt="revenue" /></figure>
        <div class="card-body">
          <h2 class="card-title"><span className='text-orange-400'>99k</span> Annual Revenue</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">

          </div>
        </div>
      </div>

      <div class="card card-compact max-w-max bg-base-100 shadow-xl">
        <figure><img className="h-28 w-28" src={review} alt="review icon" /></figure>
        <div class="card-body">
          <h2 class="card-title"><span className='text-orange-400'>22K</span> Reviews</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">

          </div>
        </div>
      </div>
      <div class="card card-compact max-w-max bg-base-100 shadow-xl">
        <figure><img className="h-28 w-28" src={parts} alt="review icon" /></figure>
        <div class="card-body">
          <h2 class="card-title"><span className='text-orange-400'>50+ </span> Parts</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">

          </div>
        </div>
      </div>

    </div>
  );
};

export default BusinessSummary;