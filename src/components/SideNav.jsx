import React, { useState } from 'react';
import './SideNav.css';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="hamburger-icon" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <h2 className="logo">App</h2>
        <ul className="nav-links">
          <li><a href="/profile">👤 Profile</a></li>

          <li
            className="notes-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-header" onClick={toggleDropdown}>
              📚 Notes
              <span className={`dropdown-arrow ${showDropdown ? 'rotated' : ''}`}>▸</span>
            </div>
            <ul className={`dropdown-list ${showDropdown ? 'visible' : ''}`}>
              <li><a href="/notes/sem1">Semester 1</a></li>
              <li><a href="/notes/sem2">Semester 2</a></li>
              <li><a href="/notes/sem3">Semester 3</a></li>
              <li><a href="/notes/sem4">Semester 4</a></li>
              <li><a href="/notes/sem5">Semester 5</a></li>
              <li><a href="/notes/sem6">Semester 6</a></li>
            </ul>
          </li>

          <li><a href="/attendance">📅 Attendance</a></li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
