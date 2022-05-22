import React from 'react';
import Social from './Social';

const LogIn = () => {
  return (
    <div className='flex justify-center items-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center font-bold">Log In</h2>

          <Social></Social>
        </div>
      </div>

    </div>
  );
};

export default LogIn;