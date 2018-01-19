import React, { Component } from 'react';
import '../App.css';
import moment  from 'moment'

import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Goal from './Goal';
import DateContainer from './DateContainer'
import { getWeek } from '../actions/getWeek'

class GoalContainer extends Component {

  // constructor(){
  //   super()
  //
  //   this.state= {
  //     color: 'black'
  //   }
  // }

  componentDidMount(){

   if (!this.props.dates.length) {
     const dates = [
       moment().subtract(3, 'days').format('MMMM Do YYYY'),
       moment().subtract(2, 'days').format('MMMM Do YYYY'),
       moment().subtract(1, 'days').format('MMMM Do YYYY'),
       moment().format('MMMM Do YYYY'),
       moment().add(1, 'days').format('MMMM Do YYYY'),
       moment().add(2, 'days').format('MMMM Do YYYY'),
       moment().add(3, 'days').format('MMMM Do YYYY'),
     ]
     this.props.getWeek(dates)

   }
  }

  render() {
    console.log('---------------------');
    console.log('GOALCONTAINER props', this.props);
    console.log('---------------------');
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
    goals: users_reducer.goals,
    dates: users_reducer.dates
  }
}

export default withRouter(connect(mapStateToProps, { getWeek })(GoalContainer));
