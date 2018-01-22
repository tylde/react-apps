import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

import './HeatmapCalendar.scss';

export default class HeatmapCalendar extends Component {
  static propTypes = {
    scale: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    })).isRequired,
    values: PropTypes.objectOf(PropTypes.object).isRequired,
    generatedDays: PropTypes.number,
    showValue: PropTypes.bool,
    showDate: PropTypes.bool
  }

  static defaultProps = {
    generatedDays: 365,
    showValue: true,
    showDate: true
  }

  constructor(props) {
    super(props);
  }

  generateWeeks(data) {
    return data.map((week, index) => {
      return (
        <div className="heatmap-column" key={'week-' + index}>
          {this.generateCells(week)}
        </div>
      );
    });
  }
  generateCells(data) {
    return data.map((cell) => {
      let style = {};
      let value = 0;
      // console.log(cell.date);
      if (this.props.values[cell.date] !== undefined && this.props.values[cell.date] !== null) {
        value = this.props.values[cell.date].value;
        for (let i = 0; i < this.props.scale.length; i++) {
          if (this.props.scale[i].from <= value  && value <= this.props.scale[i].to) {
            style.backgroundColor =  this.props.scale[i].color;
            break;
          }
        }
      }

      return (
        <div className="heatmap-cell" key={cell.date} style={style}>
          <div className="heatmap-cell-tooltip">
            {this.props.showDate && cell.date}
            {this.props.showDate && this.props.showValue && ': '}
            {this.props.showValue && value}
          </div>
          <div className="heatmap-cell-arrow" />
        </div>
      );
    });
  }

  render() {
    let today = new Date();
    let lastYearDays = {};

    let weeksArray = [];
    let cellsArray = [];

    let getDatesRecursive = function (daysAgo) {
      let date = new Date(today.getTime() - daysAgo * 3600 * 24 * 1000);
      let day = ('0' + date.getDate()).slice(-2);
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let year = date.getFullYear();
      let key = `${year}-${month}-${day}`;
      lastYearDays[key] = {
        date: key,
        dayOfWeek: date.getDay()
      };

      weeksArray.push({ date: key, day, dayOfWeek: date.getDay() });

      if (date.getDay() === 0) {
        weeksArray.reverse();
        cellsArray.push(weeksArray);
        weeksArray = [];
      }

      if (daysAgo < this.props.generatedDays) getDatesRecursive.call(this, daysAgo + 1);
      else if (daysAgo >= this.props.generatedDays && date.getDay() !== 0) getDatesRecursive.call(this, daysAgo + 1);
      else if (daysAgo >= this.props.generatedDays && date.getDay() === 0) return;
      else return;
    }

    getDatesRecursive.call(this, 0);
    // console.log(lastYearDays);

    cellsArray.reverse();

    return (
      <div className="heatmap-calendar-container">
        <div className="heatmap-weekdate">
          <div className="heatmap-weekdate-cell">Su</div>
          <div className="heatmap-weekdate-cell">Mo</div>
          <div className="heatmap-weekdate-cell">Tu</div>
          <div className="heatmap-weekdate-cell">We</div>
          <div className="heatmap-weekdate-cell">Th</div>
          <div className="heatmap-weekdate-cell">Fr</div>
          <div className="heatmap-weekdate-cell">Sa</div>
        </div>
        <div className="heatmap-map">
          {this.generateWeeks(cellsArray)}
        </div>
      </div>
    );
  }
}