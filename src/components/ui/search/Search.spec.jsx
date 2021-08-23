/* eslint-disable no-undef */
import shallow from 'enzyme/build/shallow';
import React from 'react';
import * as redux from 'react-redux';
import { createStore } from 'redux';
import Search from './Search.jsx';
import characterReducer from '../../reducers/characterReducer';

const store = createStore(characterReducer);
describe('Component with redux hooks', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch;

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector');
    spyOnUseSelector.mockReturnValue([{ id: 1, text: 'Old Item' }]);
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render Search component', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('should Search value state', () => {
    const { searchValue } = store.getState();
    expect(store.getState().searchValue).toEqual(searchValue);
  });

  it('should Search per page state', () => {
    const { perPage } = store.getState();
    expect(store.getState().perPage).toEqual(perPage);
  });
});
