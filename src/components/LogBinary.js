import React, { Component } from 'react';
import '../App.css';

// import { connect } from "react-redux";
// import { getUser } from "../actions";
// import { bindActionCreators } from 'redux';

class Log extends Component {

  render() {
    // debugger

    return (
      <div className="App">
        <p>{this.props.log.date}</p>
        <p>{(this.props.log.binary_input === true) ?
          <i className="material-icons w3-button w3-round-large">add</i>
            :
          <i className="material-icons w3-button w3-round-large">close</i>
          }
        </p>
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

export default Log;
