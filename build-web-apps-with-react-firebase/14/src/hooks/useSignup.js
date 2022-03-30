import { useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/user';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch()

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //signup error
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error('Could not complete signup');
      }
      //add display name to user
      await res.user.updateProfile({ displayName });
      
      //dispatch login action
      dispatch(loginUser(res.user))
      
      setIsPending(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};
