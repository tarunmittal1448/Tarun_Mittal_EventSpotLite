// src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';

function Navbar({ theme, toggleTheme, onSearch }) {
  return (
    <div className={`navbar ${theme}`}>
      <h1 className="navbar-title">EventSpot Lite</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search events..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default Navbar;
