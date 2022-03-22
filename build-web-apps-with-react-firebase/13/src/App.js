import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useSelector } from 'react-redux';
import { getTheme } from './store/selectors/themes';

function App() {
  const { modeDark } = useSelector(getTheme);

  return (
    <div className={modeDark ? `App dark` : `App light`}>
      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="recipes/:id" element={<Recipe />} />
        <Route path="create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
