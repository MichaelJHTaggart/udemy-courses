import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from './Searchbar';
import { useTheme } from '../hooks/useTheme';

function Navbar() {
  const color = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link className="brand" to="/">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="create">Create</Link>
      </nav>
    </div>
  );
}

export default Navbar;
