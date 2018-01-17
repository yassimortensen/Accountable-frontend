import React, { Component } from 'react';
import '../App.css';
import Log from './Log';
import LogBinary from './LogBinary';
import moment from 'moment';

import { connect } from "react-redux";

class LogContainer extends Component {

  organizeLogs = () => {
    const emptyDateComponent = <Log log={{date:'', amount_input:''}}/>;
    return this.props.dates.map((date, i) => {
      let compareDate = moment(date, 'MMMM Do YYYY')
      let foundDateComponent = emptyDateComponent;

      this.props.goal.logs.forEach((log, index) => {
        if (moment(log.date, 'YYYY-MM-DD').isSame(compareDate)) {
          if(this.props.goal.binary){
            foundDateComponent = <LogBinary key={index} log={log}/>
          } else {
            foundDateComponent = <Log key={index} log={log} unit={this.props.goal.unit}/>
          }
        }
      });
      
      return foundDateComponent;
    })
  }

  render() {
    let logs = this.organizeLogs()
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
