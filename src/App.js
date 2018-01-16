import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import { getUser } from "./actions"
import { bindActionCreators } from 'redux';

class App extends Component {

  componentDidMount(){
    this.getUserData()
  }

  getUserData(){
    fetch('http://localhost:3000/api/v1/users/1')
    .then(res => res.json())
    .then(res => this.props.getUser(res.name))
    // .then(res => console.log(res))
  }

  render() {
    console.log(this.props.store.getState())
    // debugger
    return (
      <div className="App">
        Hello!
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      getUser: getUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
