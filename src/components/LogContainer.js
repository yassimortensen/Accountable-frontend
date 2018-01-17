import React, { Component } from 'react';
import '../App.css';
import Log from './Log';
import LogBinary from './LogBinary';

import { connect } from "react-redux";
import { getUser } from "../actions";
import { bindActionCreators } from 'redux';

class LogContainer extends Component {

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      getUser: getUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogContainer);
