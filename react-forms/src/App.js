import React, { Component } from 'react';
import './sass/style.scss';
import UserForm from './components/user-form/user-form.jsx';

class App extends Component {
  render() {
    this.element = (
      <div className='container'>
        <h1>React-components</h1>
      </div>
    );

    return (
      <>
        <div className='container'>
          <UserForm />
        </div>
      </>);
  }
}

export default App;
