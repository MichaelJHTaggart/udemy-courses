import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from '../store/selectors/user';
import { logoutUser } from '../store/actions/user';
import { projectAuth, projectFirestore } from '../firebase/config';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { user } = useSelector(selectUserState);
  const dispatch = useDispatch();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      //update online status
      await projectFirestore
        .collection('users')
        .doc(user.uid)
        .update({ online: false });

      await projectAuth.signOut();

      //dispatch logout action
      dispatch(logoutUser());

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

  return { logout, error, isPending };
};
