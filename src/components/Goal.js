import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import LogContainer from './LogContainer'

import { getGoalData } from '../actions/getGoalData'
import { getGoalDataForLogForm } from '../actions/getGoalDataForLogForm'
import { deleteGoal } from '../actions/deleteGoal'

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

  handleDeleteClick = (event) => {
    console.log('delete!')
    // this.props.deleteGoal(this.props.goal.id, this.props.history)
  }

  render() {
    // debugger

    return (
      <div className='Goal' style={{borderBottom: '4px solid lightGrey', backgroundImage: `url("./lined_paper_@2X.png")`}}>
        <div style={{borderRight: '1px solid lightGrey'}}>
          <h4 onClick={this.handleClick} style={{fontFamily:'Cabin Sketch', fontSize:'36px', display: 'inline'}}>{this.props.goal.name}</h4><br />
          <div className='w3-button w3-round-xxlarge' style={{display: 'inline', margin: '5%', fontFamily:'Cabin Sketch', fontSize:'36px', color: 'red'}} onClick={this.handleDeleteClick}>
            X
          </div>
          <div className='w3-button w3-round-xxlarge' style={{display: 'inline', margin: '5%', fontFamily:'Zeyada', fontSize:'36px', color: 'blue'}} onClick={this.handleLogClick}>
          add log
          </div>
        </div>
        <LogContainer goal={this.props.goal}/>
      </div>
    );
  }
}

export default withRouter(connect(null, { getGoalData, getGoalDataForLogForm })(Goal))
