import React from 'react';
import App from './App';

describe('App', () => {
  console.log('==================================================================')

  it('render()', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.className('app-container');
  });

  it('contains Calendar', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.heatmap-calendar-container')).to.have.length(1);
  });

});