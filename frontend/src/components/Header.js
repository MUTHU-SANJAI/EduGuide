// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Career Counselling Portal</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/pathfinder">Path Finder</Link>
      </nav>
    </header>
  );
}

export default Header;
