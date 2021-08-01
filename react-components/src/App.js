import React, { Component } from 'react';
import Card from './components/card/card.jsx';
import Search from './components/search/search.jsx';
import './sass/style.scss';
import data from './data/data';

class App extends Component {
  render() {
    this.data = data;
    this.element = (
      <div className='container'>
        <h1>React-components</h1>
      </div>
    );

    return (
      <>
       <div className='container'>
          <Search/>
            <div className='cards-content'>
              {data.map((el, index) => (<Card key={`card-${index}`} ind={index}/>))}
            </div>
      </div>
    </>);
  }
}

export default App;
