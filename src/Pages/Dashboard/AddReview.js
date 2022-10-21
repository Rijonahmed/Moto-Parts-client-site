
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';

const AddReview = () => {
  const [user, loading, error] = useAuthState(auth);
  const [rating, setRating] = useState();

  console.log(user)


  const { register, formState: { errors }, handleSubmit, reset } = useForm();


  const handleRating = rating => {
    setRating(rating)


  }

  const onSubmit = async data => {

    const review = {
      userName: user.displayName,
      userReviews: data.reviews,
      rating: rating,
      photoURL: user.photoURL

    }



    fetch('https://powerful-eyrie-01032.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)

    })
      .then(res => res.json())
      .then(data => {
        toast.success('success Your Review');

        reset();

      })


  };



  return (
    <div className='mx-auto w-1/2'>

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-xl font-bold">Please Add Review</h2>



          <form onSubmit={handleSubmit(onSubmit)}>



            <input type="text" disabled value={user?.displayName} placeholder="Name" className="input input-bordered w-full max-w-xs mt-5"
              {...register("name")}
              required
            />




            <textarea name='reviews' className="textarea textarea-bordered h-8 w-full max-w-xs mt-5" placeholder="Please Type Your Reviews "  {...register("reviews")} required></textarea>

            <ReactStars
              size={40}
              count={5}
              onChange={handleRating}
            ></ReactStars>




            <input className='btn w-full max-w-xs my-5 bg-orange-500' type="submit" value='Add  Review'

            />
          </form>


        </div>
      </div>




    </div>

  );
};

export default AddReview;