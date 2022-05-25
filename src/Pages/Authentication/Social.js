import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
import Loading from '../Loading/Loading';

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [token] = useToken(user);
  if (token) {
    console.log(token);
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
      <div class="divider w-full">OR</div>
      {signInError}
      <button onClick={() => signInWithGoogle()} class="btn btn-outline w-full ">Continue with google</button>
    </div>



  );
};

export default Social;