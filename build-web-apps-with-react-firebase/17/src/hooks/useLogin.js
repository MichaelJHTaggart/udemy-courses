import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/user';
import { projectAuth, projectFirestore } from '../firebase/config';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign the user in
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      //update online status
      await projectFirestore.collection('users').doc(res.user.uid).update({online: true})

      //dispatch login action
      dispatch(loginUser(JSON.parse(JSON.stringify(res.user))));

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

  return { login, error, isPending };
};
