import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="nav-content">
        <ul className="nav-menu">
          <li className="menu-item">
            <NavLink exact to="/" className="menu-item">
              Home
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/about" className="menu-item">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
