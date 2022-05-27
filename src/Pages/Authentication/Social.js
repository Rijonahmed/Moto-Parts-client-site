import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from '../Loading/Loading';

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let form = location.state?.from?.pathname || "/";

  const [token] = useToken(user);
  if (user) {
    navigate(form, { replace: true });

  }
  if (loading) {
    return <Loading></Loading>
  }
  let signInError;

  if (error) {
    signInError = <p className='text-red-500'>{error?.message}</p>

  }


  return (

    <div>
      <div className="divider w-full">OR</div>
      {signInError}
      <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full ">Continue with google</button>
    </div>



  );
};

export default Social;