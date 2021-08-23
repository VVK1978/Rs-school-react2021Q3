/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import shallow from 'enzyme/build/shallow';
import React from 'react';
import * as redux from 'react-redux';
import Button from './components/ui/button/button.jsx';
import Header from './components/ui/header/Header.jsx';
import Input from './components/ui/input/Input.jsx';
import Navbar from './components/ui/navbar/Navbar.jsx';
import Pagination from './components/ui/pagination/Pagination.jsx';
import pagesCreator from './components/utils/pagesCreator';
import setPerPage from './components/reducers/characterReducer';
import SET_PER_PAGE from './components/reducers/characterReducer';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('pages creator function', () => {
  it('should if pages=10', () => {
    expect(pagesCreator(10)).toEqual(pages);
  });
});

describe('pages creator function', () => {
  it('should if pages=20,current page=10', () => {
    expect(pagesCreator(20, 10)).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });
});

describe('pages creator function', () => {
  it('should if pages=20,current page=4', () => {
    expect(pagesCreator(20, 4)).toEqual(pages);
  });
});

describe('Button component', () => {
  it('should render Button component', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });
});

describe('Header component', () => {
  it('should render Header component', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});

describe('Navbar component', () => {
  it('should render Navbar component', () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
  });
});

describe('Navbar component', () => {
  it('should render Navbar component', () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
  });
});

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

  it('should Limit per page', () => {
    const result = setPerPage(20, SET_PER_PAGE);
    expect(result).toBe(setPerPage(20, SET_PER_PAGE));
  });

  it('should render Pagination component', () => {
    const component = shallow(<Pagination />);
    expect(component).toMatchSnapshot();
  });
});
