import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <h1>My Articles</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> 
        <Route path="article/:id" element={<Article />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      

    </div>
  );
}

export default App;
