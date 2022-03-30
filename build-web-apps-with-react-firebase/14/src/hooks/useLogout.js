import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions/user';
import { projectAuth } from '../firebase/config';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      await projectAuth.signOut();

      //dispatch logout action
      dispatch(logoutUser());

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return logout, error, isPending;
};
