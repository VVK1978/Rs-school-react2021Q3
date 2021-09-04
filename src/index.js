import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/reducers';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
