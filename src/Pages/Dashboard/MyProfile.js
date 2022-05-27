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

    </div>
  );
};

export default MyProfile;