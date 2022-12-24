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

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className='h-28 lg:h-52 w-28 lg:w-52' src={images} alt="Album" />

        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <h3>Price: ${price}</h3>
          <h3><span className='font-bold'>quantity : </span>{quantity}</h3>
          <h3><span className='font-bold'>Minimum Order Quantity : </span>{minimumOrderQuantity}</h3>
          <p><span className='font-bold'>Description : </span>{description.slice(0, 25)}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handlePurchase(_id)} className="btn btn-sm btn-outline hover:bg-primary text-primary hover:text-white">Book Now</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SixParts;