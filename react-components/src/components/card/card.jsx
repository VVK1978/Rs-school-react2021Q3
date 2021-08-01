import React, { Component } from 'react';
import data from '../../data/data';

class Card extends Component {
  constructor(props) {
    super(props);
    this.ind = props.ind;
  }

  render() {
    return (
      <>
  <div className='card-body'>
    <div className='card-img'>
      <img src={data[this.ind].url} alt={data[this.ind].name}/>
    </div>
    <div className='card-footer'>
      <h3 className='card-film-name'>{data[this.ind].name}</h3>
      <h4 className='card-film-country'>Страна: {data[this.ind].country}</h4>
      <h4 className='card-film-year'>Год: {data[this.ind].year}</h4>
      <h4 className='card-film-genre'>Жанр: {data[this.ind].genre}</h4>
      <h4 className='card-film-raiting'>Рэйтинг: {data[this.ind].raiting}</h4>
      <h4></h4>
    </div>
    <div className='card-film-play'>
      <a href=''>
        <img src='' alt=''/>
      </a>
    </div>
    <div className='card-film-favorite'>
      <a href=''>
        <img src='' alt=''/>
      </a>
    </div>
  </div>
  </>
    );
  }
}
export default Card;
