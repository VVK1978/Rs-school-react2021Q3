/* eslint-disable no-undef */
import React from 'react';
import shallow from 'enzyme/build/shallow';
import * as redux from 'react-redux';
import Input from './Input.jsx';

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

  it('should render Input component', () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });
});
