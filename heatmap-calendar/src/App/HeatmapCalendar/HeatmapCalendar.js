import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

import './HeatmapCalendar.scss';

export default class HeatmapCalendar extends Component {
  static propTypes = {
    scale: PropTypes.arrayOf(PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired
    })),
    values: PropTypes.objectOf(PropTypes.object),
    generatedDays: PropTypes.number,
    showValue: PropTypes.bool,
    showDate: PropTypes.bool,
    firstDayOfWeek: PropTypes.oneOf([0, 1])
  }

  static defaultProps = {
    generatedDays: 365,
    scale: [{ from: 1, to: 999999999, color: '#104175' }],
    showValue: true,
    showDate: true,
    values: {},
    firstDayOfWeek: 1
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

      if (this.props.values[cell.date] !== undefined && this.props.values[cell.date] !== null) {
        value = this.props.values[cell.date].value;
        for (let i = 0; i < this.props.scale.length; i++) {
          if (this.props.scale[i].from <= value && value <= this.props.scale[i].to) {
            style.backgroundColor = this.props.scale[i].color;
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
    let weeksArray = [];
    let cellsArray = [];

    let getDatesRecursive = function (daysAgo) {
      let date = new Date(today.getTime() - daysAgo * 3600 * 24 * 1000);
      let day = ('0' + date.getDate()).slice(-2);
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let year = date.getFullYear();
      let key = `${year}-${month}-${day}`;

      weeksArray.push({ date: key, day, dayOfWeek: date.getDay() });

      if (date.getDay() === this.props.firstDayOfWeek) {
        cellsArray.push(weeksArray.reverse());
        weeksArray = [];
      }

      if (daysAgo < this.props.generatedDays) getDatesRecursive.call(this, daysAgo + 1);
      else if (daysAgo >= this.props.generatedDays && date.getDay() !== this.props.firstDayOfWeek) getDatesRecursive.call(this, daysAgo + 1);
      else return;
    }

    getDatesRecursive.call(this, 0);
    cellsArray.reverse();

    let daysNames = [];
    if (this.props.firstDayOfWeek === 0) daysNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    else daysNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    return (
      <div className="heatmap-calendar-container">
        <div className="heatmap-weekdate">
          <div className="heatmap-weekdate-cell">{daysNames[0]}</div>
          <div className="heatmap-weekdate-cell">{daysNames[1]}</div>
          <div className="heatmap-weekdate-cell">{daysNames[2]}</div>
          <div className="heatmap-weekdate-cell">{daysNames[3]}</div>
          <div className="heatmap-weekdate-cell">{daysNames[4]}</div>
          <div className="heatmap-weekdate-cell">{daysNames[5]}</div>
          <div className="heatmap-weekdate-cell">{daysNames[6]}</div>
        </div>
        <div className="heatmap-map">
          {this.generateWeeks(cellsArray)}
        </div>
      </div>
    );
  }
}