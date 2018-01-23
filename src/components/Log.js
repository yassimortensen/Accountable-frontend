import React, { Component } from 'react';
import '../App.css';

// import { connect } from "react-redux";
// import { getUser } from "../actions";
// import { bindActionCreators } from 'redux';

class Log extends Component {

  render() {
    // debugger

    return (
      <div style={{display: 'inline-block'}}>
        <p style={{fontFamily:'Zeyada', fontSize: '36px'}}>{this.props.log.amount_input} {this.props.unit}</p>
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
