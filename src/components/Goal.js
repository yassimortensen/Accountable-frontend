import React, { Component } from 'react';
import '../App.css';
import LogContainer from './LogContainer'

// import { connect } from "react-redux";
// import { getUser } from "../actions";
// import { bindActionCreators } from 'redux';

class Goal extends Component {

  render() {
    // debugger

    return (
      <div className="App">
        <p>{this.props.goal.name}</p>
        <LogContainer goal={this.props.goal}/>
      </div>
    );
  }
}
//
// const mapStateToProps = ({users_reducer}) => {
//   return {
//     ...users_reducer
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//       getUser: getUser
//     }, dispatch)
// }

export default Goal;
