import React, { Component } from 'react';
import statesUsa from '../../data/states.jsx';
import cities from '../../data/cities.jsx';
import Card from '../card/card.jsx';
import createElement from '../element/element.jsx';
import removeChild from '../../functions/remove-child.jsx';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.statesUsa = statesUsa;
    this.cities = cities;
    this.state = {
      gender: 'female',
      cardData: [],
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    const { id } = e.target;
    if (id === 'state') {
      this.onCities(this.statesUsa.indexOf(value));
    }
    if (!id) {
      this.setState({ gender: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.zip = e.target.zip.value;
    this.data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      birth: e.target.birth.value,
      zip: this.zip,
      state: e.target.state.value !== '- Select State -' ? e.target.state.value : '',
      city: e.target.city.value !== '- Select City -' ? e.target.city.value : '',
      email: e.target.email.value,
      gender: e.target.gender.value,
      isSubscribe: e.target.isSubscribe.checked,
    };
    if (!this.isValidUSZip(this.zip)) {
      alert('ZIP code wrong!!!');
      e.target.zip.value = '';
    } else {
      const newList = [...this.state.cardData];
      newList.push(this.data);
      this.setState({ cardData: newList });
      this.formReset();
    }
  }

  formReset() {
    document.getElementById('user-form').reset();
    document.querySelector('.cities').style.display = 'none';
    return this;
  }

  isValidUSZip(zip) {
    this.zip = zip;
    return /^\d{5}(-\d{4})?$/.test(this.zip);
  }

  onCities(stateIndex) {
    this.element = document.querySelector('.cities');
    this.content = document.getElementById('city');
    removeChild(this.content);
    if (stateIndex === -1) {
      this.element.style.display = 'none';
    } else {
      this.element.style.display = 'flex';
      this.content.append(createElement('option', '- Select City -'));
      this.cities[stateIndex].forEach((el) => {
        this.content.append(createElement('option', el));
      });
    }
  }

  render() {
    return (
      <>
        <form
          name='form'
          onSubmit={this.handleSubmit}
          id='user-form'
        >
          <div
            className='user-info'
          >
            <label
              className='label-form'
            >
              First Name* :
              <input
                required
                name='firstName'
                className='input-form'
                id='firstName'
                type="text"
              />
            </label>
            <label
              className='label-form'
            >
              Last Name* :
              <input
                required
                name='lastName'
                className='input-form'
                id='lastName'
                type="text"
              />
            </label>
            <label
              className='label-form'
            >
              Date of birth* :
              <input
                required
                name='birth'
                className='input-form date'
                id='birth'
                type="date"
              />
            </label>
          </div>
          <div
            className='address-info'
          >
            <label
              className='label-form'
            >
              Zip code* :
              <input
                required
                name='zip'
                maxLength='5'
                className='input-form zip'
                id='zip'
                type="number"
              />
            </label>
            <label
              className='label-form'
            >
              State:
              <select
                id='state'
                onChange={this.onChange}
              >
                <option>
                  - Select State -
                </option>
                {this.statesUsa.map((el, ind) => <option key={`state-${ind}`}> {el}</option>)
                }
              </select>
            </label>
            <label
              className='label-form cities'
            >
              City:
              <select
                id='city'
              >
              </select>
            </label>
            <label className='label-form'>E-mail:
              <input
                name='email'
                className='input-form'
                id='email' type='email'
              />
            </label>
            <label
              className='label-form'
            >
              Subscribe:
              <input
                name='isSubscribe'
                className='input-form subscribe'
                id='isSubscribe'
                type='checkbox'
              />
            </label>
            <label className='label-form'>Sex* :
              <label>Female
                <input
                  name='gender'
                  className='input-form'
                  type='radio'
                  value='female'
                  onChange={this.onChange}
                  checked={this.state.gender === 'female'}
                />
              </label>
              <label>Male
                <input
                  name='gender'
                  className='input-form'
                  type='radio'
                  value='male'
                  onChange={this.onChange}
                  checked={this.state.gender === 'male'}
                />
              </label>
            </label>
          </div>
          <div
            className='btn-container'
          >
            <input
              type="submit"
              value="Submit"
              className='btn' />
          </div>
          <span >* - required field</span>
        </form >
        <div className='cards-container'>
          {this.state.cardData.length !== 0
            ? this.state.cardData.map((el, ind) => <Card key={`card-${ind}`} data={el} />)
            : ''}
        </div>
      </>
    );
  }
}

export default UserForm;
