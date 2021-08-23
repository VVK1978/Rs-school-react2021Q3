import React from 'react';
import Button from './button.jsx';

describe('Button component', () => {
  it('should render Button component', () => {
    const component = shallow(<Button />);
    expect(component).toMatchSnapshot();
  });
});
