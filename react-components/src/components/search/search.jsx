import React, { Component } from 'react';
import search from '../../assets/icons/search.svg';

class Search extends Component {
  render() {
    return (
      <>
      <div className='search-content'>
        <input className='search-input' placeholder='Search...'/>
        <a href='#'>
          <img src={search}/>
        </a>
      </div>
      </>
    );
  }
}

export default Search;
