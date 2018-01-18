import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";
// import { Route, Switch, withRouter } from 'react-router-dom';

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

export default connect(mapStateToProps, null)(GoalContainer);
