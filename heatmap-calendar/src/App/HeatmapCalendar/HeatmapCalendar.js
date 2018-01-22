import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

import './HeatmapCalendar.scss';

export default class HeatmapCalendar extends Component {
  static propTypes = {

  }

  static defaultProps = {
    scale: {
      0: { from: 0, to: 0, color: '#DDD' },
      1: { from: 1, to: 1, color: '#F4A661' },
      2: { from: 2, to: 2, color: '#F49949' },
      3: { from: 3, to: 3, color: '#F48C30' },
      4: { from: 4, to: 4, color: '#FF6D19' },
      5: { from: 5, to: 5, color: '#FF5D00' }
    },
    values: [
      { date: '2017-11-25', value: 1 },
      { date: '2017-12-07', value: 4 },
      { date: '2017-12-12', value: 2 },
      { date: '2017-12-19', value: 2 },
      { date: '2017-12-23', value: 3 },
      { date: '2017-12-28', value: 1 },
      { date: '2017-12-30', value: 1 },
      { date: '2018-01-04', value: 2 },
      { date: '2018-01-06', value: 5 },
      { date: '2018-01-09', value: 2 },
      { date: '2018-01-14', value: 5 },
      { date: '2018-01-16', value: 3 },
      { date: '2018-01-18', value: 4 },
      { date: '2018-01-21', value: 2 }
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      // today: new Date()
    }
  }

  componentWillMount() {
    // console.log(this.state.today);
  }
  componentWillUpdate() {
    // console.log(this.state);
  }

  render() {
    let daysCount = 365;

    let today = new Date();
    let lastYearDays = {};
    // console.log(day.getTime())

    for (let i = 0; i < daysCount; i++) {
      let date = new Date(today.getTime() - i * 3600 * 24 * 1000);
      let day = ('0' + date.getDate()).slice(-2);
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let year = date.getUTCFullYear();
      let key = `${year}-${month}-${day}`;
      lastYearDays[key] = {
        date: key,
        dayOfWeek: date.getDay()
      };
    }


    let getDatesRecursive = function (daysAgo) {
      let date = new Date(today.getTime() - daysAgo * 3600 * 24 * 1000);
      let day = ('0' + date.getDate()).slice(-2);
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let year = date.getUTCFullYear();
      let key = `${year}-${month}-${day}`;
      lastYearDays[key] = {
        date: key,
        dayOfWeek: date.getDay()
      };

      if (daysAgo < 360) getDatesRecursive(daysAgo + 1);
      else if (daysAgo >= 360 && date.getDay() != 0) getDatesRecursive(daysAgo + 1);
      else return;
    }

    getDatesRecursive(0);


    console.log(lastYearDays);
    return (
      <div className="heatmap-calendar-container">
        Heatmap Calendar
      </div>
    );
  }
}