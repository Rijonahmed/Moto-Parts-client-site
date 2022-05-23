import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }


  return (

    <div>
      <div class="divider w-full">OR</div>
      <button onClick={() => signInWithGoogle()} class="btn btn-outline w-full ">Continue with google</button>
    </div>



  );
};

export default Social;