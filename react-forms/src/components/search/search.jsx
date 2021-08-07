import React, { Component } from 'react';
import search from '../../assets/icons/search.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.search = search;
  }

  render() {
    return (
      <>
      <div className='search-content'>
        <input className='search-input' placeholder='Поиск...'/>
        <a href='#'>
          <img src={this.search}/>
        </a>
      </div>
      </>
    );
  }
}

export default Search;
