import React from 'react';
import search from '../../../assets/icons/search.svg';

export default function Button() {
  return (
    <button className="search-btn btn" type="submit">
      <img src={search} alt="search" className="search-img" />
    </button>
  );
}
