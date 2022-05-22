import React from 'react';

const SixParts = ({ parts }) => {
  const { name, price, images } = parts;
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className='h-52 w-52' src={images} alt="Album" />

        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <h3>Price: ${price}</h3>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SixParts;