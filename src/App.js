import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import { connect } from "react-redux";
import { getUser } from "./actions"
import { bindActionCreators } from 'redux';

import GoalContainer from './components/GoalContainer'
import NavBar from './components/NavBar'
import LogForm from './components/LogForm'
import GoalForm from './components/GoalForm'

class App extends Component {

  componentDidMount(){
    this.getUserData()
  }

  getUserData(){
    fetch('http://localhost:3000/api/v1/users/1')
    .then(res => res.json())
    .then(res => this.props.getUser(res))
    // .then(res => console.log(res))
  }

  render() {
    // // debugger
    console.log(this.props)
    return (
      <div>
        <div className="navbar">
          <NavBar name={this.props.name}/>
        </div>
        <Switch>
          <Route exact path='/add/goal' render={() => <div><GoalForm /></div>} />
          <Route exact path='/add/log' render={() => <div><LogForm /></div>} />
          <Route exact path='/goals' render={() => <div><GoalContainer /></div>} />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      getUser: getUser
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
