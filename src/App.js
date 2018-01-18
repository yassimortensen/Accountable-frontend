import React, { Component } from 'react';
import moment from 'moment';
import './App.css';

import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getCurrentUser } from './actions/getAuthUser'
import { getWeek } from "./actions/getWeek"

import HomePage from './components/HomePage'
import LoginForm from './components/LoginForm'

class App extends Component {

  componentWillMount(){
    const token = localStorage.getItem('token')
    if (token) {
      this.props.getCurrentUser()
    }
  }

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
  }

  render() {
    console.log(this.props)

    if(localStorage.getItem('token')){ //&& this.props.location.pathname === '/'
      return <HomePage />
    } else {
      return <LoginForm />
    }
  }
}

// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
//     ...state
//   }
// }

// <div className='App'>
//   <div className="navbar">
//     <NavBar name={this.props.name}/>
//   </div>
//   <Switch>
//     <Route exact path='/' render={() => <LoginForm />} />
//     <Route exact path='/add/goal' render={() => <GoalForm />} />
//     <Route exact path='/goal/:id/add/log' render={form} />
//     <Route exact path='/goals' render={() => <GoalContainer />} />
//     <Route exact path='/goal/:id/show' render={() => <ShowGoalContainer />} />
//   </Switch>
// </div>

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, getWeek })(App));
