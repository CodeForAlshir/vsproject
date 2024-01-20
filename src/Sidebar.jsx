// Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from "./Images/logo.jpg";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isSidebarOpen && (
        <>
          <div className="brand">
            <Link to="/">
              <img
                src={logo} 
                alt="Brand Logo"
                className="brand-logo"
              />
            </Link>
            <Link to="/" className="brand-name">
              KleinPastry corp
            </Link>
          </div>
          <Link to="/">Home</Link>
          <Link to="/subscribed">Subscribed</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/saved">Saved</Link>
        </>
      )}
    </div>
  );
}

export default Sidebar;
