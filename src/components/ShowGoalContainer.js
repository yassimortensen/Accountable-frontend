import React, { Component } from 'react';
import '../App.css';
import { getGoalData } from '../actions/getGoalData';
import { connect } from "react-redux";
import {Line} from "react-chartjs-2";

class ShowGoalContainer extends Component {

  componentDidMount(){
    if (!this.props.selected_goal){
      this.props.getGoalData(this.props.match.params.id, this.props.history)
    }
  }

  render() {

    let content;

    if (!this.props.selected_goal){
      content = <div>Loading</div>
    } else {
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
      const lineData = {
        datasets: [
          {
            data: organizedLogs.map(log => (log.amount_input)),
            fill: false
          }
        ],
        labels: organizedLogs.map(log => (log.date)),
      };

      let lineOptions =
      {
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              min: 0
            }
          }]
        }
      }

      content =(
      <div>
        <h1 style={{margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey'}}>{this.props.goal.name}</h1>
        <div style={{paddingLeft:'10%', display:'inline-block'}}>
          <h2>Overview</h2>
          <p>Did you {this.props.selected_goal.description.toLowerCase()}?</p>
        </div><br />
        <div style={{textAlign:'center'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{textAlign: 'center', display:'inline-block', margin: '2%'}}>
              <h4 style={{display:'inline', margin: '2%'}}>Score</h4><br />
              <h4 style={{display:'inline', margin: '2%'}}>data</h4>
            </div>
            <div style={{textAlign: 'center', display:'inline-block', margin: '2%'}}>
              <h4 style={{display:'inline', margin: '2%'}}>Month</h4><br />
              <h4 style={{display:'inline', margin: '2%'}}>data</h4>
            </div>
            <div style={{textAlign: 'center', display:'inline-block', margin: '2%'}}>
              <h4 style={{display:'inline', margin: '2%'}}>Year</h4><br />
              <h4 style={{display:'inline', margin: '2%'}}>data</h4>
            </div>
          </div>
          <div style={{width: '75%', height:'50%', textAlign: 'center', display:'inline-block'}}>
            <Line data={lineData} options={lineOptions}/>
          </div>
        </div>
      </div>
    )
  }

    return content;
  }
}

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//       getUser: getUser
//     }, dispatch)
// }

export default connect(mapStateToProps, { getGoalData })(ShowGoalContainer);
