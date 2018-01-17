import React, { Component } from 'react';
import '../App.css';
import Log from './Log';
import LogBinary from './LogBinary';

import { connect } from "react-redux";

class LogContainer extends Component {

  // organizeLogs = () => {
  //   this.props.dates.map(date => {
  //     if ()
  //   })
  // }

  render() {

    //function that returns an array of the current week
      //expect array of 7 days
      //map over array
      //add logic for empty days with no data


    const logs = this.props.goal.logs.map((log, index) => {
      if (this.props.goal.binary === true) {
        return (<LogBinary key={index} log={log}/>)
      } else {
        return (<Log key={index} log={log} unit={this.props.goal.unit}/>)
      }
    })

    return (
      <ul className='LogContainer'>
        {logs}
      </ul>
    );
  }
}

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}

export default connect(mapStateToProps, null)(LogContainer);
