import { useEffect } from 'react';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { projectAuth } from './firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { authIsReady } from './store/actions/user';
import { selectUserState } from './store/selectors/user';

function App() {
  const dispatch = useDispatch();
  const { authReady, user } = useSelector(selectUserState);
  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      dispatch(authIsReady(JSON.parse(JSON.stringify(user))));
    });
  }, []);

  return (
    <div className="App">
      {authReady && (
        <>
          <Navbar />

          <Routes>
            <Route
              index
              element={(!user && <Navigate to="/login" />) || (user && <Home />)}
            />
            <Route
              path="login"
              element={(user && <Navigate to="/" />) || (!user && <Login />)}
            />
            <Route
              path="signup"
              element={(user && <Navigate to="/" />) || (!user && <Signup />)}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
