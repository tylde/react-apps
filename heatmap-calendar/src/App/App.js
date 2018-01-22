import React, { Component } from 'react';

import './App.scss';

import HeatmapCalendar from './HeatmapCalendar'

export default class App extends Component {
  render() {
    let calendarProps = {
      test: 'testst'
    };

    return (
      <div className="app-container">
        <HeatmapCalendar {...calendarProps} />
      </div>
    );
  }
}