import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
