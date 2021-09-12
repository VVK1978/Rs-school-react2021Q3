import React, { Component } from 'react';
import data from '../../data/data';
import play from '../../assets/icons/play1.png';
import Button from '../button/button.jsx';

class Card extends Component {
  constructor(props) {
    super(props);
    this.cardIndex = props.cardIndex;
  }

  render() {
    return (
      <div className='card-body'>
        <div className='card-img'>
          <img src={data[this.cardIndex].url} alt={data[this.cardIndex].name} />
          <div className='card-film-play'>
            <a href='#'>
              <img className='play-img' src={play} alt='' title='Воспроизвести' />
            </a>
          </div>
        </div>
        <div className='card-footer'>
          <h3 className='card-film-name'>{data[this.cardIndex].name}</h3>
          <h4 className='card-film-country'>Страна: {data[this.cardIndex].country}</h4>
          <h4 className='card-film-year'>Год: {data[this.cardIndex].year}</h4>
          <h4 className='card-film-genre'>Жанр: {data[this.cardIndex].genre}</h4>
          <h4 className='card-film-raiting'>Рэйтинг: {data[this.cardIndex].raiting}</h4>
          <h4></h4>
        </div>
        <div className='card-film-favorite'>
          <a href='#'>
            <img className='favorite-img' src='' alt='' />
          </a>
        </div>
        <Button class='film-about btn' text='Подробнее' />
      </div>
    );
  }
}
export default Card;
