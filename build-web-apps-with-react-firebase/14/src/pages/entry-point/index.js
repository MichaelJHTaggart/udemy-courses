import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './login';

const renderApp = (loading, user) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <Suspense fallback={<div>Loading...</div>}></Suspense>
  ) : (
    <Login />
  );
};

export const EntryPoint = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.user.loading);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch({ type: 'USER_FETCH' });
  }, [dispatch]);

  return renderApp(loading, user);
}
