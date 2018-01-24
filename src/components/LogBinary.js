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
        <p style={{margin: '0'}}>{(this.props.log.binary_input === true) ?
          <img style={{maxHeight: '40px', margin: '0'}} src="./020-sign.png" />
            :
            <div style={{fontFamily:'Cabin Sketch', fontSize:'40px', paddingTop:'1%', color: '#444546'}}> X </div>
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
