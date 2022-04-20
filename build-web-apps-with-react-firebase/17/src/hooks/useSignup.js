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
    console.log( thumbnail, '<= thumbnail')
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
      //? What is upload path doing? 
      //* This is the path that firebase projectStorage will be using
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      console.log(uploadPath)
      //? What are we storing in img?
      //* An object that firebase returns to us. There are different properties, and methods on this object.
      const img = await projectStorage.ref(uploadPath).put(thumbnail)
      console.log(img)
      //* We use one of the methods on the response to get the url for an img.
      const imgUrl = await img.ref.getDownloadURL()

      //add display name to user && the current live url for their photo
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

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
