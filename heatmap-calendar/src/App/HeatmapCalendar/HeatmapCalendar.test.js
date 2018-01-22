import React from 'react';
import HeatmapCalendar from './HeatmapCalendar';

describe('HeatmapCalendar', () => {

  it('render()', () => {
    const wrapper = shallow(<HeatmapCalendar />);
    expect(wrapper).to.have.className('heatmap-calendar-container');
  });


});