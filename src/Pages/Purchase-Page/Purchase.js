import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {

  const [user, loading, error] = useAuthState(auth);

  const { purchaseId } = useParams();
  const [totalPrice, setTotalPrice] = useState();
  const [userQuantity, setUserQuantity] = useState();

  const [singleParts, setSingleParts] = useState({});
  const url = `http://localhost:5000/parts/${purchaseId}`


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSingleParts(data))

  }, [])

  const { _id, name, price, images, quantity, minimumOrderQuantity, description } = singleParts;


  const handleQuantity = e => {

    const InputQuantity = e.target.value;
    setUserQuantity(InputQuantity)

    const totalPartsPrice = price * InputQuantity;
    setTotalPrice(totalPartsPrice);


  }








  // mongo db booking section
  const handleBooking = e => {
    e.preventDefault();


    const booking = {

      partsId: _id,
      partsNmae: name,
      totalPrice: totalPrice,
      userQuantity: userQuantity,
      userEmail: user.email,
      userNmae: user.displayName,
      phone: e.target.phone.value,
      address: e.target.address.value


    }

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)

    })
      .then(res => res.json())
      .then(data => {
        toast.success('your booking success')

      })


  }




  //lg:card-side

  return (
    <div className='lg:w-6/12 m-auto'>


      <div class="card grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl">
        <div className='border-r-2'>
          <figure class="px-10 pt-10 ">
            <img src={images} alt="Shoes" class=" w-6/12 border-2 border-green-700" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="text-3xl font-bold">{name}</h2>
            <p>Per unit Price : {price}</p>
            <p>Available Quantity : {quantity}</p>
            <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
            <p>Description : {description}</p>

          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">Your Order Quantity</h2>

          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Product name </span>

              </label>
              <input type="text" disabled value={name} className="input input-bordered input-accent w-full max-w-xs" />

            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Email Address</span>

              </label>
              <input type="email" name='email' disabled value={user?.email} className="input input-bordered input-accent w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Name</span>

              </label>
              <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs" />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your total booking Price</span>

              </label>
              <input type="number" disabled value={totalPrice} className="input input-bordered input-accent w-full max-w-xs" />

            </div>


            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your product Quantity</span>

              </label>
              <input onChange={handleQuantity} name='quantity' placeholder={`Minimum Order ${minimumOrderQuantity}`} type="number" className="input input-bordered input-accent w-full max-w-xs" required />

            </div>






            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">please type your Phone number</span>

              </label>
              <input type="number" name='phone' placeholder="Phone" className="input input-bordered input-accent w-full max-w-xs" required />
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">please type your Address</span>

              </label>
              <textarea name='address' class="textarea textarea-bordered h-18" placeholder="Address" required></textarea>
            </div>

            <input type="submit" value="Submit" disabled={(minimumOrderQuantity > userQuantity || userQuantity > quantity)} className="btn btn-secondary w-full max-w-xs" />




          </form>









        </div>

      </div>









    </div>
  );
};

export default Purchase;