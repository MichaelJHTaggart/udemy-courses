import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
