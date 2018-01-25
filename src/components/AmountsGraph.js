import React, { Component } from 'react';
// import moment from 'moment';
import '../App.css';

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {Line} from "react-chartjs-2";

class AmountsGraph extends Component {

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

  render() {
    console.log(this.props)

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

    const averagesByMonth = organizedByMonth.map(month => {
      let date = new Date()
      let year = date.getFullYear()
      let getSum = function getSum(total, num) {
          return total + num;
      }
      let amounts = []

      if (month[year-1]){
        month[year-1].forEach(log => (amounts.push(log.amount_input)))
      }
      // else {
      //   month[year].forEach(log => (amounts.push(log.amount_input)))
      // }
      let average = (amounts.reduce(getSum))/amounts.length
      return average
    })

    const lineData = {
      datasets: [
        {
          data: averagesByMonth,
          borderColor: 'rgba(141, 175, 254, 0.9)',
          fill: false,
        }
      ]
    };

    const previousYear = () => {
      let date = new Date()
      let year = date.getFullYear()
      return (year-1)
    }

    const lineOptions =
    {
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      title: {
        display: true,
        fontSize: 24,
        text: `Did you ${this.props.selected_goal.description.toLowerCase()} for ${previousYear()}?`
      },
      scales: {
        yAxes: [{
          scaleLabel:{
            display: true,
            labelString: `Average ${this.props.selected_goal.name}, ${this.props.selected_goal.unit}`,
            fontSize: 24
          },
          ticks: {
            fontSize: 18
          }
        }],
        xAxes: [{
          scaleLabel:{
            // display: true,
            // fontSize: 24
          },
          ticks: {
            fontSize: 18,
          },
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
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

export default withRouter(connect(mapStateToProps, null)(AmountsGraph));
