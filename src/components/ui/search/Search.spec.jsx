/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Search from './Search.jsx';
import store from '../../reducers/index';

test('renders correctly', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Router>
        <Search />
      </Router>
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
