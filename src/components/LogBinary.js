import React, { Component } from 'react';
import '../App.css';

// import { connect } from "react-redux";
// import { getUser } from "../actions";
// import { bindActionCreators } from 'redux';

class Log extends Component {

  render() {
    // debugger

    return (
      <div>
        <p>{(this.props.log.binary_input === true) ?
          <i class="fa fa-check-square-o fa-2x" aria-hidden="true" style={{color: 'grey'}}></i>
            :
            <i class="fa fa-square-o fa-2x" aria-hidden="true" style={{color: 'grey'}}></i>
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
