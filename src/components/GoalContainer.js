import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";
import { getUser } from "../actions";
import { bindActionCreators } from 'redux';

import Goal from './Goal';
import DateContainer from './DateContainer'

class GoalContainer extends Component {

  // constructor(){
  //   super()
  //
  //   this.state= {
  //     color: 'black'
  //   }
  // }

  render() {
    const goals = this.props.goals.map((goal,index) => (
      <Goal key={index} goal={goal}/>
    ))
    return (
      <div className='GoalContainer'>
        <h1 style={{margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey'}}>Goals</h1>
        <DateContainer />
        {goals}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainer);
