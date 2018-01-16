import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";
import { getUser } from "../actions";
import { bindActionCreators } from 'redux';

import Goal from './Goal';

class GoalContainer extends Component {

  render() {
    // debugger
    // const goals =
    return (
      <div className="App">
        <h1>{this.props.name}</h1>
        <Goal />
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
