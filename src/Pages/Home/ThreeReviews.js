import React from 'react';

const ThreeReviews = ({ review }) => {
  const { userName, userReviews, rating, photoURL } = review;
  return (
    <div>
      <div className="card w-96 h-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photoURL} alt='This user dose not have a pictur' className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{userName}</h2>

          <p>Review Text : {userReviews}</p>
          <h4>Rating: <span className='text-orange-600'>{rating} Star</span></h4>

        </div>
      </div>

    </div>
  );
};

export default ThreeReviews;