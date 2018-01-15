import React from 'react';
import App from './App';

import Header from './Header';

import MenuButton from './NavBar/MenuButton'

describe('App', () => {
  // const setup = 


  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });


  it('contains Main component', () => {
    expect(wrapper.find('.main-container')).to.have.length(1);
  });
  it('contains Header component', () => {
    expect(wrapper.find('.header-container')).to.have.length(1);
  });
  it('contains MenuButton component ', () => {
    console.log(wrapper.find(MenuButton));
    // expect(wrapper.find(MenuButton)).to.have.length(1);
  });
  it('contains NavBar component', () => {
    expect(wrapper.find('.navbar-container')).to.have.length(1);
  });


});