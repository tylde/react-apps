import React from 'react';
import { MemoryRouter, Switch } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MemoryRouter><NavBar /></MemoryRouter>);
  });

  it('render()', () => {
    expect(wrapper.find('.navbar-container')).to.have.length(1);
  });
  it('has class navbar-container', () => {
    expect(wrapper).to.have.className('navbar-container');
  });

  it('has default 250px width', () => {
    expect(wrapper).to.have.style('width', '250px')
  });
  it('collapsing after click', () => {
    wrapper.find('.navbar-collapse-button').simulate('click');
    expect(wrapper).to.have.style('width', '50px')
  });
  it('expanding after second click', () => {
    wrapper.find('.navbar-collapse-button').simulate('click').simulate('click');
    expect(wrapper).to.have.style('width', '250px')
  });
  it('has 9 menu buttons', () => {
    expect(wrapper.find('.menu-container').children()).to.have.length(9);
  });
});