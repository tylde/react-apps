import React from 'react';
import Clock from './Clock';

describe('Clock', () => {

  it('render()', () => {
    const wrapper = shallow(<Clock />);
    expect(wrapper).to.have.className('clock-container');
  });


});