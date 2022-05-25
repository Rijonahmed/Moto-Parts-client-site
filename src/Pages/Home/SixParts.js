import React from 'react';
import { useNavigate } from 'react-router-dom';

const SixParts = ({ parts }) => {
  const { _id, name, price, images, quantity, minimumOrderQuantity, description } = parts;
  const navigate = useNavigate();
  const handlePurchase = id => {
    navigate('/purchase/' + id)

  }

  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className='h-52 w-52' src={images} alt="Album" />

        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold">{name}</h2>
          <h3>Price: ${price}</h3>
          <h3><span className='font-bold'>quantity : </span>{quantity}</h3>
          <h3><span className='font-bold'>Minimum Order Quantity : </span>{minimumOrderQuantity}</h3>
          <p><span className='font-bold'>Description : </span>{description.slice(0, 25)}</p>
          <div class="card-actions justify-end">
            <button onClick={() => handlePurchase(_id)} class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SixParts;