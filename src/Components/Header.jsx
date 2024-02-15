import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My App</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
