/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import Limit from './Limit.jsx';
import store from '../../reducers/index';

const props = {
  options: [10, 20, 50, 100],
};

describe('Limit component:', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Limit {...props} />
      </Provider>,
    );
  });
  const rerender = (element) => {
    screen.queryByTestId(element);
  };

  test('renders correctly', async () => {
    expect(screen).toMatchSnapshot();
  });

  test('should render select:', () => {
    rerender('select');
    expect(screen).toBeDefined();
  });

  test('should render option:', () => {
    rerender('option');
    expect(screen).toBeDefined();
  });

  test('should change select options:', async () => {
    function hasInputValue(element, inputValue) {
      return screen.getByDisplayValue(inputValue) === element;
    }
    const select = await screen.queryByTestId('select');
    fireEvent.change(select, {
      target: { value: '50' },
    });
    expect(hasInputValue(select, '50')).toBe(true);
  });
});
