import React from 'react';
import Search from '../search/Search';
import Navbar from '../navbar/Navbar';

export default function Header() {
  const h1 = <h1 className="main-title">React.SSR</h1>;

  return (
    <>
      {h1}
      <header className="head">
        <Navbar />
        <Search />
      </header>
    </>
  );
}
