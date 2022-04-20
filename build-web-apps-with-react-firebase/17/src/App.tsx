import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="create" element={<Create />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
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
    </div>
  );
}

export default App;
