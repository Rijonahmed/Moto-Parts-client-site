import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal';

const Purchase = () => {

  const { purchaseId } = useParams();
  const [singleParts, setSingleParts] = useState({});
  const [bookPrice, setBookPrice] = useState();
  const [userQuantity, setUserQuantity] = useState();
  const url = `http://localhost:5000/parts/${purchaseId}`


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSingleParts(data))

  }, [])

  const { name, price, images, quantity, description } = singleParts;

  const handleQuantity = e => {
    e.preventDefault();

    const inputQuantity = e.target.quantity.value;

    const totalPrice = price * parseInt(inputQuantity);

    setUserQuantity(parseInt(inputQuantity));
    setBookPrice(totalPrice);

  }
  let number = 100;


  return (
    <div className='lg:w-6/12 m-auto'>


      <div class="card lg:card-side bg-base-100 shadow-xl">
        <div className='border-r-2'>
          <figure class="px-10 pt-10 ">
            <img src={images} alt="Shoes" class=" w-6/12 border-2 border-green-700" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-3xl font-bold">{name}</h2>
            <p>Per unit Price : {price}</p>
            <p>Available Quantity : {quantity}</p>
            <p>Description : {description}</p>

          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">New album is released!</h2>
          <span>
            <p>Per unit Price : {price}</p>
            <p>Must buy at least 100 product</p>
            <p>Your total price is : {bookPrice}</p>
            <p>Your Quantity is : {userQuantity}</p>
          </span>

          <div class="form-control">
            <form onSubmit={handleQuantity}>

              <label class="input-group">

                <input className='input input-bordered' type="number" name='quantity' placeholder='add Quantity' required />
                <br />

                <input className='btn btn-outline-primary' type="submit" value="Add" />
              </label>
            </form>
          </div>

          <div class="card-actions justify-end ">
            <label for="booking-modal"
              class="btn modal-button btn btn-primary"
            >Buy Now</label>
          </div>
        </div>
      </div>



      {
        <BookingModal
          singleParts={singleParts}
          userQuantity={userQuantity}
          bookPrice={bookPrice}
        ></BookingModal>
      }





    </div>
  );
};

export default Purchase;