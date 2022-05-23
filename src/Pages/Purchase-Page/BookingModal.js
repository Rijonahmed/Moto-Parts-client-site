import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ singleParts, bookPrice, userQuantity }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, price, images, quantity, description } = singleParts;



  const handleBooking = e => {
    e.preventDefault();


    const booking = {

      parts: name,
      userEmail: user.email,
      userNmae: user.displayName,
      phone: e.target.phone.value

    }
  }


  return (
    <div>

      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg text-center">{name}</h3>


          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>

            <input type="number" disabled value={bookPrice} className="input input-bordered input-accent w-full max-w-xs" />
            <input type="number" disabled value={userQuantity} className="input input-bordered input-accent w-full max-w-xs" />



            <input type="text" disabled value={price} className="input input-bordered input-accent w-full max-w-xs" />

            <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs" />
            <input type="email" name='email' disabled value={user?.email} className="input input-bordered input-accent w-full max-w-xs" />
            <input type="number" name='phone' placeholder="Phone" className="input input-bordered input-accent w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />

          </form>




        </div>
      </div>


    </div>
  );
};

export default BookingModal;