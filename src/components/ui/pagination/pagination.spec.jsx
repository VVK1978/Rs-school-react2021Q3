/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Pagination from './Pagination.jsx';
import store from '../../reducers/index';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('renders correctly Pagination', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Router>
        <Pagination {...pages} />
      </Router>
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
