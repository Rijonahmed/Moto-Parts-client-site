import React from 'react';

const ThreeReviews = ({ review }) => {
  const { userName, userReviews, rating } = review;
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{userName}</h2>

          <p>{userReviews}</p>
          <h4>Rating: <span className='text-orange-600'>{rating} Star</span></h4>

        </div>
      </div>

    </div>
  );
};

export default ThreeReviews;