import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const { purchaseId } = useParams();
  const [singleParts, setSingleParts] = useState({});
  const url = `http://localhost:5000/parts/${purchaseId}`


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSingleParts(data))

  }, [])

  const { name, price, images, quantity, description } = singleParts;


  return (
    <div className='m-auto w-6/12 sm:min-w-max'>

      <div class="card  bg-base-100 shadow-2xl">
        <figure class="px-10 pt-10 ">
          <img src={images} alt="Shoes" class=" w-3/12 border-2 border-green-700" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="text-3xl font-bold">{name}</h2>
          <p>Price : {price}</p>
          <p>Quantity : {quantity}</p>
          <p>Description : {description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Purchase;