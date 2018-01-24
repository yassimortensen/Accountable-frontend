import React, { Component } from 'react';
// import moment from 'moment';
import '../App.css';

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {Bar} from "react-chartjs-2";

class BinaryGraph extends Component {

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
    //UNFINISHED
  }

  render() {
    console.log(this.props)

    const organizedLogs = this.props.selected_goal.logs.sort(
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

    const dataSet = organizedByMonth.map(month => {
      let date = new Date()
      let year = date.getFullYear()
      let logs = []
      if (month[year-1]){
        month[year-1].forEach(log => (logs.push(log.binary_input)))
      }
      return logs
    })

    const analysis = dataSet.map(array => {
      let n = 0
      array.map(value => {
        if(value === true){
          n++
        }
      })
      let average = (n / array.length) * 100
      return average
    })

    const lineData = {
      datasets: [
        {
          data: analysis,
          borderColor:[
            'rgba(255, 65, 65, 1)',
            'rgba(255, 173, 96, 1)',
            'rgba(255, 219, 96, 1)',
            'rgba(50, 194, 164, 1)',
            'rgba(92, 162, 232, 1)',
            'rgba(192, 129, 255, 1)',
            'rgba(255, 65, 65, 1)',
            'rgba(255, 173, 96, 1)',
            'rgba(255, 219, 96, 1)',
            'rgba(50, 194, 164, 1)',
            'rgba(92, 162, 232, 1)',
            'rgba(192, 129, 255, 1)'
          ],
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 65, 65, 0.2)',
            'rgba(255, 173, 96, 0.2)',
            'rgba(255, 219, 96, 0.2)',
            'rgba(50, 194, 164, 0.2)',
            'rgba(92, 162, 232, 0.2)',
            'rgba(192, 129, 255, 0.2)',
            'rgba(255, 65, 65, 0.2)',
            'rgba(255, 173, 96, 0.2)',
            'rgba(255, 219, 96, 0.2)',
            'rgba(50, 194, 164, 0.2)',
            'rgba(92, 162, 232, 0.2)',
            'rgba(192, 129, 255, 0.2)'
          ]
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
      "horizontalLine": [{
        "y": ((this.props.selected_goal.frequency)/7)*100,
        "style": "rgba(255, 0, 0, .4)",
        "text": "your goal"
      }],
      animation: {
        duration: 1500
      },
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
            labelString: `Percentage of Days, %`,
            fontSize: 24
          },
          ticks: {
            fontSize: 18,
            // max: 100
          }
        }],
        xAxes: [{
          scaleLabel:{
            // display: true,
            // labelString: `Month of Previous Year (${previousYear()})`,
            // fontSize: 24
          },
          ticks: {
            fontSize: 18,
          },
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        }]
      }
    }

    return (
      <div>
        <div style={{textAlign:'center'}}>
          <div style={{width: '60%', textAlign: 'center', display:'inline-block'}}>
            <Bar data={lineData} options={lineOptions}/>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{textAlign: 'center', display:'inline-block', margin: '2%'}}>
              <h4 style={{display:'inline', margin: '2%'}}>Average</h4><br />
              <h4 style={{display:'inline', margin: '2%'}}>{this.getAverage()} {this.props.selected_goal.unit}</h4>
            </div>
            <div style={{textAlign: 'center', display:'inline-block', margin: '2%'}}>
              <h4 style={{display:'inline', margin: '2%'}}>Score</h4><br />
              <h4 style={{display:'inline', margin: '2%'}}>{this.getScore()}</h4>
            </div>
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

export default withRouter(connect(mapStateToProps, null)(BinaryGraph));
