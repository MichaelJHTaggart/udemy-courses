import { useState, useEffect } from 'react';
import { projectAuth, projectStorage } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../store/actions/user';

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const signup = async (email, password, displayName, thumbnail) => {
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

      //upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      //add display name to user && the current live url for their photo
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      //dispatch login action
      dispatch(signUpUser(JSON.parse(JSON.stringify(res.user))));

      //update state
      console.log(isCancelled, '<= value of isCancelled right before if statement');
      if (!isCancelled) {
        console.log('hit?');
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
    return () => setIsCancelled(false);
  }, []);

  return { error, isPending, signup };
};
