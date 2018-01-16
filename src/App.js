import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import { getUser } from "./actions"
import { bindActionCreators } from 'redux';

import GoalContainer from './components/GoalContainer'

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
      <div className="App">
        <GoalContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
