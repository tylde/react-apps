import React from 'react';
import { MemoryRouter, Switch } from 'react-router-dom';
import MenuButton from './MenuButton';

describe('MenuButton', () => {
  let wrapper, defaultProps;
  beforeEach(() => {
    defaultProps = {
      to: '/testhref',
      color: '#a4c23a',
      icon: 'icon-test',
      text: 'Test Unit',
      collapsed: false
    }
    wrapper = mount(<MemoryRouter><MenuButton {...defaultProps} /></MemoryRouter>);
  });

  it('render()', () => {
    expect(wrapper.find('a.menu-button-container')).to.have.length(1);
  });
  it('has #a4c23a color', () => {
    expect(wrapper.find('button')).to.have.style('border-color', defaultProps.color)
  });
  it('has 2 spans', () => {
    expect(wrapper.find('span')).to.have.length(2);
  });
  it('has specified icon', () => {
    expect(wrapper.find('.menu-button-icon').children()).to.have.className(defaultProps.icon)
  });
  it('has specified text', () => {
    expect(wrapper.find('.menu-button-text')).text(defaultProps.text)
  });
});