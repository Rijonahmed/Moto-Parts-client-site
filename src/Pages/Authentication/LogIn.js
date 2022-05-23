import React from 'react';
import Social from './Social';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  let form = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(form, { replace: true });
  }


  if (loading) {
    return <Loading></Loading>
  }
  let signInError;

  if (error) {
    signInError = <p className='text-red-500'>{error.message}</p>

  }


  const onSubmit = data => {

    signInWithEmailAndPassword(data.email, data.password)
    console.log(data)
  };
  return (
    <div className='flex justify-center items-center'>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>

              </label>
              <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    massage: 'email is required'
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    massage: 'Provide a valid email'
                  }
                })}

              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.massage}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.massage}</span>}


              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>

              </label>
              <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    massage: 'password is required'
                  },
                  minLength: {
                    value: 6,
                    massage: 'six chareacter '
                  }
                })}

              />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.massage}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.massage}</span>}


              </label>
            </div>


            {signInError}

            <input className='btn w-full max-w-xs' type="submit" value='Log In' />
          </form>

          <p><small>New to Moto Parts Factory site <Link className='text-primary' to="/register">Create a new Account</Link></small></p>


          <Social></Social>
        </div>
      </div>

    </div>
  );
};

export default LogIn;