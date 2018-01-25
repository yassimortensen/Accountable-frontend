import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {Line} from "react-chartjs-2";

class AmountsGraphMonth extends Component {

  getAverage = () => {
    let logData = []
    this.props.selected_goal.logs.forEach(log => {
      logData.push(log.amount_input)
    })
    let getSum = function getSum(total, num) {
        return total + num;
    }
    let average = parseFloat((logData.reduce(getSum))/logData.length).toFixed(2)
    return average
  }

  getScore = () => {
    let logData = []
    this.props.selected_goal.logs.forEach(log => {
      logData.push(log.amount_input)
    })
  }

  render() {
    console.log('month data!!')

    const organizedLogs = this.props.selected_goal.logs.sort(
      //sorts all logs by date from least to most recent
      function (a, b) {
        let logA = a.date
        let logB = b.date
        if(logA < logB){
          return -1
        } else {
          return 1
        }
      }
    )

    const organizedByMonth = new Array()
    //array of all logs organized by month

    const getMonth = organizedLogs.forEach(log => {
      let date = new Date(log.date)
      let month = date.getMonth()
      let year = date.getFullYear()
      if (organizedByMonth[month]){
        if (organizedByMonth[month][year]){
          organizedByMonth[month][year].push(log)
        } else {
          organizedByMonth[month][year] = [log]
        }
      } else {
        organizedByMonth[month] = {[year]: [log]}
      }
    })

    const date = moment().subtract(1, 'months').format('YYYY-MM-DD')
    const lastMonth = new Date(date)
    const yearOfLastMonth = lastMonth.getFullYear()
    const monthInteger = lastMonth.getMonth()

    const lastMonthData = organizedByMonth[monthInteger][yearOfLastMonth]

    const amounts = lastMonthData.map(log => {
      return log.amount_input
    })

    const dates = lastMonthData.map(log => {
      let date = moment(log.date, "YYYY-MM-DD").format('MM-DD')
      return date
    })

    // const newData = [lastMonthLogs[0], lastMonthLogs[1], lastMonthLogs[2], lastMonthLogs[3]]

    // debugger

    const lineData = {
      datasets: [
        {
          data: amounts,
          borderColor: 'rgba(141, 175, 254, 0.9)',
          fill: false,
        }
      ]
    };

    const lineOptions =
    {
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        fontSize: 24,
        text: `Did you ${this.props.selected_goal.description.toLowerCase()} last month?`
      },
      scales: {
        yAxes: [{
          scaleLabel:{
            display: true,
            labelString: `${this.props.selected_goal.name}, ${this.props.selected_goal.unit}`,
            fontSize: 24
          },
          ticks: {

            fontSize: 16,

          }
        }],
        xAxes: [{
          scaleLabel:{
            // display: true,
            // fontSize: 24
          },
          ticks: {
            fontSize: 18,
            autoSkipPadding: 20
          },
          labels: dates
        }]
      },
      annotation: {
        drawTime: 'afterDatasetsDraw',
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          id: 'hLine',
          scaleID: 'y-axis-label',
          value: parseFloat('70'),
          borderColor: 'rgba(189, 189, 189, 0.5)',
          width: 4
          // label: {
          //   enabled: false,
          //   content: 'Goal'
          // }
        }]
      },
      animation: {
        duration: 1500
      },
    }

    return (
      <div>
        <div style={{textAlign:'center'}}>
          <div style={{width: '60%', textAlign: 'center', display:'inline-block'}}>
            <Line data={lineData} options={lineOptions}/>
          </div>
          <div style={{textAlign: 'center'}}>
            <h4>Your average {this.props.selected_goal.name.toLowerCase()} is {this.getAverage()} {this.props.selected_goal.unit}</h4>
            <h4>Your goal is {this.props.selected_goal.amount} {this.props.selected_goal.unit}</h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}

export default withRouter(connect(mapStateToProps, null)(AmountsGraphMonth));
