/* eslint-disable no-undef */
import React from 'react';
import * as redux from 'react-redux';
import Limit from './Limit.jsx';

const props = {
  options: [10, 20, 50, 100],
  handlerChange: () => {},
};

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

  describe('limit handler test:', () => {});

  describe('Limit component:', () => {
    it('should render select:', () => {
      const component = shallow(<Limit {...props} />);
      const select = component.find('select').hasClass('limit-select');
      expect(select).toBe(true);
    });

    it('should render options', () => {
      const component = shallow(<Limit {...props} />);
      const option = component.find('option');
      expect(option).toHaveLength(4);
    });
  });
});
