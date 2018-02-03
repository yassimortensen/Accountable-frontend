import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import LogContainer from './LogContainer'

import { getGoalData } from '../actions/getGoalData'
import { getGoalDataForLogForm } from '../actions/getGoalDataForLogForm'
import { deleteGoal } from '../actions/deleteGoal'

import { connect } from "react-redux";
import swal from 'sweetalert';
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
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this goal!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.props.deleteGoal(this.props.goal.id, this.props.history)
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your goal is safe!");
      }
    })
  }

  render() {
    // debugger

    return (
      <div className='Goal' style={{height:'110px', backgroundImage: `url("./lined_paper_@2X.png")`}}>
        <div style={{borderRight: '2px solid red'}}>
          <h4 style={{color: '#4DBFB6', fontFamily:'Cabin Sketch', fontSize:'30px', display: 'inline'}}>{this.props.goal.name}</h4><br />
          <div className='line' style={{marginLeft: '10%', display: 'inline', fontFamily:'Cabin Sketch', fontSize:'30px', color: 'red'}} onClick={this.handleDeleteClick}>
            x
          </div>
          <div className='line' style={{margin:'5%', display: 'inline', fontFamily:'Zeyada', fontSize:'30px', color: '#1F8CE3'}} onClick={this.handleLogClick}>
          add log
          </div>
          <div style={{display: 'inline'}} onClick={this.handleClick}>
            <img alt="" className='w3-round hover' style={{maxHeight: '55px'}} src="./021-line-graphic-sketch.png" />
          </div>
        </div>
        <LogContainer goal={this.props.goal}/>
      </div>
    );
  }
}

export default withRouter(connect(null, { getGoalData, getGoalDataForLogForm, deleteGoal })(Goal))
