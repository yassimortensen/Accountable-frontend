import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import LogContainer from './LogContainer'

import { getGoalData } from '../actions/getGoalData'
import { getGoalDataForLogForm } from '../actions/getGoalDataForLogForm'

import { connect } from "react-redux";
// import { getUser } from "../actions";
// import { bindActionCreators } from 'redux';

class Goal extends Component {

  handleClick = (event) => {
    this.props.getGoalData(this.props.goal.id, this.props.history)
  }

  handleLogClick = (event) => {
    this.props.getGoalDataForLogForm(this.props.goal.id, this.props.history)
  }

  render() {
    // debugger

    return (
      <div className='Goal' style={{borderBottom: '1px solid lightGrey'}}>
        <div style={{borderRight: '1px solid lightGrey'}}>
          <h4 onClick={this.handleClick}>{this.props.goal.name}</h4>
          <button onClick={this.handleLogClick} >Add Log</button>
        </div>
        <LogContainer goal={this.props.goal}/>
      </div>
    );
  }
}

export default withRouter(connect(null, { getGoalData, getGoalDataForLogForm })(Goal))
