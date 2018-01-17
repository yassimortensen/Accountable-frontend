import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import moment from 'moment';
import './App.css';

import { connect } from "react-redux";
import { getUser } from "./actions"
import { getWeek } from "./actions/getWeek"

import GoalContainer from './components/GoalContainer'
import NavBar from './components/NavBar'
import LogForm from './components/LogForm'
import LogFormBinary from './components/LogFormBinary'
import GoalForm from './components/GoalForm'
import ShowGoalContainer from './components/ShowGoalContainer'

class App extends Component {

  componentDidMount(){
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
    this.getUserData()
  }

  getUserData(dates){
    fetch('http://localhost:3000/api/v1/users/1')
    .then(res => res.json())
    .then(res => this.props.getUser(res))
  }

  render() {
    console.log(this.props)
    const form = () => {
      if (this.props.selected_goal.binary === true){
        return (<LogFormBinary />)
      } else {
        return (<LogForm />)
      }
    }
    return (
      <div className='App'>
        <div className="navbar">
          <NavBar name={this.props.name}/>
        </div>
        <Switch>
          <Route exact path='/add/goal' render={() => <GoalForm />} />
          <Route exact path='/goal/:id/add/log' render={form} />
          <Route exact path='/goals' render={() => <GoalContainer />} />
          <Route exact path='/goal/:id/show' render={() => <ShowGoalContainer />} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     ...state
//   }
// }

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}

export default withRouter(connect(mapStateToProps, { getUser, getWeek })(App));
