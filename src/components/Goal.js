import React, { Component } from 'react';
import '../App.css';

import { connect } from "react-redux";
import { getUser } from "../actions";
import { bindActionCreators } from 'redux';

class Goal extends Component {

  render() {
    // debugger
    // const goals =
    return (
      <div className="App">
        <p>This is a goal!</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
