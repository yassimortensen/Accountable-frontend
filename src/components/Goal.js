import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../App.css';
import LogContainer from './LogContainer'

import { selectGoal } from '../actions/selectGoal'

import { connect } from "react-redux";
// import { getUser } from "../actions";
// import { bindActionCreators } from 'redux';

class Goal extends Component {

  handleClick = (event) => {
    this.props.selectGoal(this.props.goal)
  }

  render() {
    // debugger

    return (
      <div className='Goal' style={{borderBottom: '1px solid lightGrey'}}>
        <div style={{borderRight: '1px solid lightGrey'}}>
          <NavLink to={`/goal/${this.props.goal.id}/show`}><h4 onClick={this.handleClick}>{this.props.goal.name}</h4></NavLink>
          <NavLink to={`/goal/${this.props.goal.id}/add/log`}><button onClick={this.handleClick} >Add Log</button></NavLink>
        </div>
        <LogContainer goal={this.props.goal}/>
      </div>
    );
  }
}

export default withRouter(connect(null, {selectGoal})(Goal))
