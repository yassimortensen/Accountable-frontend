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
     // const dates = [
     //   moment().subtract(3, 'days').format('MMMM Do YYYY'),
     //   moment().subtract(2, 'days').format('MMMM Do YYYY'),
     //   moment().subtract(1, 'days').format('MMMM Do YYYY'),
     //   moment().format('MMMM Do YYYY'),
     //   moment().add(1, 'days').format('MMMM Do YYYY'),
     //   moment().add(2, 'days').format('MMMM Do YYYY'),
     //   moment().add(3, 'days').format('MMMM Do YYYY'),
     // ]
     const dates = [
       moment().startOf('week').format('MMMM Do YYYY'),
       moment().startOf('week').add(1, 'days').format('MMMM Do YYYY'),
       moment().startOf('week').add(2, 'days').format('MMMM Do YYYY'),
       moment().startOf('week').add(3, 'days').format('MMMM Do YYYY'),
       moment().startOf('week').add(4, 'days').format('MMMM Do YYYY'),
       moment().startOf('week').add(5, 'days').format('MMMM Do YYYY'),
       moment().startOf('week').add(6, 'days').format('MMMM Do YYYY')
     ]
     this.props.getWeek(dates)

   }
  }

  render() {

    let goals;

    if(this.props.goals[0]){
      goals = this.props.goals.map((goal,index) => (
        <Goal key={index} goal={goal}/>
      ))
    } else {
      goals = <div style={{backgroundImage: `url("./lined_paper_@2X.png")`, height: '100%'}}><h1 style={{fontFamily: 'Zeyada', textAlign: 'center', paddingTop: '10%'}}>You have no goals yet. Create some above.</h1></div>
    }

    return (
      <div className='GoalContainer'>
        <h1 style={{height: '60px', backgroundImage: `url("./lined_paper_@2X.png")`, margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey', fontFamily:'Cabin Sketch'}}>
          goals
          <img style={{maxHeight: '50px', display:"inline", paddingLeft: '10%'}} src="./017-shape-1.png" />
          <img style={{maxHeight: '50px', display:"inline", paddingLeft: '10%'}} src="./011-alarm-clock-hand-drawn-outline.png" />
          <img style={{maxHeight: '50px', display:"inline", paddingLeft: '10%'}} src="./008-paint.png" />
          <img style={{maxHeight: '50px', display:"inline", paddingLeft: '10%'}} src="./002-nature.png" />
          <img style={{maxHeight: '50px', display:"inline", paddingLeft: '10%'}} src="./018-social.png" />
          <img style={{maxHeight: '50px', display:"inline", paddingLeft: '10%'}} src="./015-money.png" />
          <img style={{maxHeight: '50px', display:"inline", paddingLeft: '10%'}} src="./016-interface.png" />



        </h1>
        <DateContainer />
        <div style={{backgroundImage: `url("./lined_paper_@2X.png")`, height: '100%'}}>
          {goals}
        </div>
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
