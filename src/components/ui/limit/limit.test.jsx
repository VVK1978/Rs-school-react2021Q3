/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Limit from './Limit.jsx';
import store from '../../reducers/index';

const props = {
  options: [10, 20, 50, 100],
  handlerChange: () => {},
};

test('renders correctly', async () => {
  const wrapper = render(
    <Provider store={store}>
      <Router>
        <Limit {...props} />
      </Router>
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
