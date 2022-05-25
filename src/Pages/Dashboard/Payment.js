import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`

  const { data: parts, isLoading } = useQuery(['booking', id], () => fetch(url, {
    method: 'GET',

  }).then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>


      <div class="hero min-h-screen ">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 class="text-xl font-bold">Product Name : {parts.partsNmae}</h1>
            <p className='text-xl'>Total Price : {parts.totalPrice}</p>




          </div>
          <div className='mx-4'>
            <h1 class="text-4xl font-bold pb-10 text-center">My Profile...</h1>
            <h1 class="text-3xl font-bold">Name : { }</h1>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Payment;