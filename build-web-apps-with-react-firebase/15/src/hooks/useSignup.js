import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../store/actions/user';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

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
      dispatch(signUpUser(JSON.parse(JSON.stringify(res.user))));


      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
