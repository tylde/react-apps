import React from 'react';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });

  it('render()', () => {
    expect(wrapper).to.have.className('app-container');
  });
  it('contains Main component', () => {
    expect(wrapper.find('.main-container')).to.exist;
    // expect(wrapper.find('.main-container')).to.have.length(1);    
  });
  it('contains Header component', () => {
    expect(wrapper.find('.header-container')).to.exist;
  });
  it('contains NavBar component', () => {
    expect(wrapper.find('.navbar-container')).to.exist;
  });
});