import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import NotFound from './pages/notFound/NotFound';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />  
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="recipes/:id" element={<Recipe />} />
        <Route path="create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
