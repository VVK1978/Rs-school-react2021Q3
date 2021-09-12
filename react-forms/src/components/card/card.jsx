import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
        <div className='card-body'>
          <h4 className='card-first-name'>
            <span>First Name:</span>
            {this.props.data.firstName}
          </h4>
          <h4 className='card-last-name'>
            <span>Last Name:</span>
            {this.props.data.lastName}
          </h4>
          <h4 className='card-date-birth'>
            <span>Date of birth:</span>
            {this.props.data.birth}
          </h4>
          <h4 className='card-zip'>
            <span>ZIP:</span>
            {this.props.data.zip}
          </h4>
          <h4 className='card-state-name'>
            <span>State:</span>
            {this.props.data.state}
          </h4>
          <h4 className='card-city-name'>
            <span>City: </span>
            {this.props.data.city}
          </h4>
          <h4 className='card-email'>
            <span>E-mail:</span>
            {this.props.data.email}
          </h4>
          <h4 className='card-subscribe'>
            <span>Subscribe:</span>
            {this.props.data.isSubscribe === false ? 'No' : 'Yes'}
          </h4>
          <h4 className='card-gender'>
            <span>Sex:</span>
            {this.props.data.gender}
          </h4>
        </div>
    );
  }
}
export default Card;
