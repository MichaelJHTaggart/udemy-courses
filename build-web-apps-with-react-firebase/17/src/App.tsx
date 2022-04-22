import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';
import { projectAuth } from './firebase/config';

import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from './store/selectors/user';
import { authIsReady } from './store/actions/user';
import { OnlineUsers } from './components/OnlineUsers';

function App() {
  const dispatch = useDispatch();
  const { authReady, user } = useSelector(selectUserState);

  useEffect(() => {
    projectAuth.onAuthStateChanged((user) => {
      let string = JSON.stringify(user);
      let aUser = JSON.parse(string);
      dispatch(authIsReady(aUser));
    });
  }, []);

  return (
    <div className="App">
      {user && <Sidebar />}
      <div className="container">
        <Navbar />

        <Routes>
          <Route
            index
            element={
              (user && <Dashboard />) || (!user && <Navigate to="login" />)
            }
          />
          <Route
            path="create"
            element={(user && <Create />) || (!user && <Navigate to="login" />)}
          />
          <Route
            path="project"
            element={
              (user && <Project />) || (!user && <Navigate to="login" />)
            }
          />
          <Route
            path="login"
            element={(!user && <Login />) || (user && <Navigate to="/" />)}
          />
          <Route
            path="signup"
            element={
              (!user && <Signup />) || (user && <Navigate to="signup" />)
            }
          />
          <Route
            path="*"
            element={
              <>
                <h1>Nothing here!</h1>
              </>
            }
          />
        </Routes>
      </div>
      {user && <OnlineUsers />}
    </div>
  );
}

export default App;
