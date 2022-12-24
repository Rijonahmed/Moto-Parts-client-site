import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const [profileData, setProfileData] = useState({});
  const [isReload, setIsReload] = useState(true);

  useEffect(() => {
    fetch(`https://powerful-eyrie-01032.herokuapp.com/myProfile/${user.email}`)
      .then(res => res.json())
      .then(data => setProfileData(data))
  }, [isReload])



  const onSubmit = async data => {

    // console.log(data)

    const profile = {
      name: user?.displayName,
      email: user?.email,
      phone: data.phone,
      education: data.education,
      address: data.address

    }
    console.log(profile)

    fetch('https://powerful-eyrie-01032.herokuapp.com/myProfile', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(profile)

    })
      .then(res => res.json())
      .then(data => {
        toast.success('my profile inserted success');
        setIsReload(!isReload)
        reset();

      })


  };


  return (
    <div>


      <div className="hero min-h-screen ">

        <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
          <div class="md:w-1/2 lg:w-full text-center mb-8 md:mb-0">
            <img class="w-48 h-48 rounded-full mx-auto -mb-24" src={user?.photoURL} alt="Avatar Jacky" />
            <div class="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
              <h3 class="font-title text-gray-800 text-xl mb-3">
                Jacky Pout
              </h3>
              <p class="font-body">
                FullStack Engineer
              </p>
              <p class="font-body text-sm mb-4">
                He love caramel and he hate PHP
              </p>
              <label for="my-modal-6" class="btn modal-button">open modal</label>
            </div>
          </div>
          <div className='mx-4'>
            <h1 className="text-4xl font-bold pb-10 text-center">My Profile...</h1>
            <h1 className="text-3xl font-bold">Name : {user?.displayName}</h1>
            <p className="py-4"><span className='font-bold'>Email Address : </span>{user?.email}</p>
            <p className="py-4"><span className='font-bold'>Phone Number : </span>{profileData.phone}</p>
            <p className="py-4"><span className='font-bold'>Education : </span>{profileData.education}</p>
            <p className="py-4"><span className='font-bold'>Address : </span>{profileData.address}</p>

          </div>
        </div>















      </div>


      <div class="md:flex gap-8">

      </div>

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>

                </label>
                <input type="name" placeholder="Name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs"
                  {...register("name")}
                />

              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>

                </label>
                <input type="email" placeholder="Email"
                  disabled value={user?.email} className="input input-bordered w-full max-w-xs"
                  {...register("email")}

                />

              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>

                </label>
                <input type="number" placeholder="Enter Phone Number" className="input input-bordered w-full max-w-xs"
                  {...register("phone")}

                />

              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">please type your Education Info</span>

                </label>
                <textarea name='education' className="textarea textarea-bordered h-8" placeholder="Education"  {...register("education")} required ></textarea>
              </div>


              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">please type your Address</span>

                </label>
                <textarea name='address' className="textarea textarea-bordered h-8" placeholder="Address"  {...register("address")} required></textarea>
              </div>




              <input className='btn w-full max-w-xs my-5' type="submit" value='Add Profile' />
            </form>

          </div>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">Yay!</label>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MyProfile;