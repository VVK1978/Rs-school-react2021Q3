import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Search from '../search/Search.jsx';

export default function Header() {
  return (
    <header className="head">
      <Navbar />
      <Search />
    </header>
  );
}
