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
      <div className='Goal' style={{height:'100px', borderBottom: '4px solid lightGrey', backgroundImage: `url("./lined_paper_@2X.png")`}}>
        <div style={{borderRight: '1px solid lightGrey'}}>
          <h4 onClick={this.handleClick} style={{fontFamily:'Cabin Sketch', fontSize:'30px', display: 'inline'}}>{this.props.goal.name}</h4><br />
          <div style={{display: 'inline', fontFamily:'Cabin Sketch', fontSize:'30px', color: 'red', marginRight: '2%'}} onClick={this.handleDeleteClick}>
            X
          </div>
          <div style={{display: 'inline', fontFamily:'Zeyada', fontSize:'30px', color: 'blue', marginLeft: '2%'}} onClick={this.handleLogClick}>
          add log
          </div>
        </div>
        <LogContainer goal={this.props.goal}/>
      </div>
    );
  }
}

export default withRouter(connect(null, { getGoalData, getGoalDataForLogForm })(Goal))
