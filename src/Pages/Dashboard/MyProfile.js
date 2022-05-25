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
    fetch(`http://localhost:5000/myProfile/${user.email}`)
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

    fetch('http://localhost:5000/myProfile', {
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
      <h1>My Profile</h1>





      <div class="hero min-h-screen ">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
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

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">please type your Education Info</span>

                </label>
                <textarea name='education' class="textarea textarea-bordered h-8" placeholder="Education"  {...register("education")} required ></textarea>
              </div>


              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">please type your Address</span>

                </label>
                <textarea name='address' class="textarea textarea-bordered h-8" placeholder="Address"  {...register("address")} required></textarea>
              </div>




              <input className='btn w-full max-w-xs my-5' type="submit" value='Add Profile' />
            </form>

          </div>
          <div className='mx-4'>
            <h1 class="text-4xl font-bold pb-10 text-center">My Profile...</h1>
            <h1 class="text-3xl font-bold">Name : {user?.displayName}</h1>
            <p class="py-4"><span className='font-bold'>Email Address : </span>{user?.email}</p>
            <p class="py-4"><span className='font-bold'>Phone Number : </span>{profileData.phone}</p>
            <p class="py-4"><span className='font-bold'>Education : </span>{profileData.education}</p>
            <p class="py-4"><span className='font-bold'>Address : </span>{profileData.address}</p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default MyProfile;