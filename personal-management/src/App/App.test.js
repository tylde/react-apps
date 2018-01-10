import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<App />);
  });


  it('contains Main component', () => {
    expect(wrapper.find('.main-container')).to.have.length(1);
  });
  it('contains NavBar component', () => {
    expect(wrapper.find('.navbar-container')).to.have.length(1);
  });


});