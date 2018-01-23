import React, { Component } from 'react';

import './App.scss';

import HeatmapCalendar from './HeatmapCalendar'

export default class App extends Component {
  render() {
    let heatmapCalendarProps = {
      scale: [
        { from: 1, to: 1, color: '#E0B300' },
        { from: 2, to: 2, color: '#00B25C' },
        { from: 3, to: 3, color: '#F20018' },
        { from: 4, to: 4, color: '#006BB2' },
        { from: 5, to: 99999, color: '#EA4A00' }
      ],
      values: {
        '2017-11-25': { date: '2017-11-25', value: 1 },
        '2017-12-07': { date: '2017-12-07', value: 4 },
        '2017-12-12': { date: '2017-12-12', value: 2 },
        '2017-12-19': { date: '2017-12-19', value: 2 },
        '2017-12-23': { date: '2017-12-23', value: 3 },
        '2017-12-28': { date: '2017-12-28', value: 1 },
        '2017-12-30': { date: '2017-12-30', value: 1 },
        '2018-01-04': { date: '2018-01-04', value: 2 },
        '2018-01-06': { date: '2018-01-06', value: 5 },
        '2018-01-09': { date: '2018-01-09', value: 2 },
        '2018-01-14': { date: '2018-01-14', value: 5 },
        '2018-01-16': { date: '2018-01-16', value: 3 },
        '2018-01-18': { date: '2018-01-18', value: 4 },
        '2018-01-21': { date: '2018-01-21', value: 2 },
      },
      generatedDays: 365,
      showValue: true,
      showDate: true,
      firstDayOfWeek: 1
    };

    return (
      <div className="app-container">
        <HeatmapCalendar {...heatmapCalendarProps} />
      </div>
    );
  }
}