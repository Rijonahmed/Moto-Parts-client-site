import React from 'react';
import myImages from '../../image/rijon.jpg'

const MyPortfolio = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center mt-5'>My <span className='text-orange-500'>Portfolio</span></h1>

      <div className="card w-96 m-auto bg-base-100 shadow-xl mt-14">
        <figure className="px-10 pt-10">
          <img className='rounded-full w-2/4 items-center' src={myImages} alt="" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className='text-2xl font-bold'>Rijon Ahned</h1>
          <h4 className='text-xl'>Email Address : rijon036@gmail.com</h4>

        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-12'>


        <div className="card bg-base-100 shadow-xl my-20">
          <span className='card-body'>
            <h1 className='text-xl m-8 font-bold'>List of technologies or skills that to me as a web developer.</h1>


            <p>&#8226; I can make react application.</p>
            <p>&#8226; I can implement firebase authentication system.</p>
            <p>&#8226; I can use node js for backend.</p>
            <p>&#8226; I can use mongodb for database.</p>
            <p>&#8226; I can reduce the quantity of any product.</p>
            <p>&#8226; I can do CRUD (Create, Read, Update, Delete) operations.</p>
            <h2 className='text-xl font-bold'>My project Link</h2>
            <p className='text-success font-bold'><a href="https://moto-dealer.web.app/" target="_blank" rel="noopener noreferrer"> Project one</a></p>
            <p className='text-success font-bold'><a href="https://best-wedding-photographer.web.app/" target="_blank" rel="noopener noreferrer"> Project two</a></p>
            <p className='text-success font-bold'><a href="https://favourite-bike-choose-for-1.netlify.app/" target="_blank" rel="noopener noreferrer"> Project three</a></p>

          </span>

        </div>


        <div className="card bg-base-100 shadow-xl my-20">
          <div className="card-body">
            <h1 className='text-2xl font-bold'>Educational background</h1>
            <h4 className='text-xl'>&#8226; SSC batch-2017 from Amirjan High School in Dumni, Khilkhet, Dhaka</h4>
            <h4 className='text-xl'>&#8226; HSC batch-2019 from Amirjan College in Dumni, Khilkhet, Dhaka</h4>
            <h4 className='text-xl'>&#8226; Now i am studing in Honor's 2nd year from Uttara Town Colege in Uttara,Abdullapur, Dhaka</h4>

          </div>
        </div>


      </div>
    </div>

  );
};

export default MyPortfolio;