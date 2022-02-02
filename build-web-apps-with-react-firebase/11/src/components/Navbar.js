import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Searchbar from './Searchbar';

function Navbar() {
 return (
  <div className="navbar">
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
