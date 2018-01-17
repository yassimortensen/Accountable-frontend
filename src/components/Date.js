import React, { Component } from 'react';
import '../App.css';

class Date extends Component {

  render() {
    return (
      <div>
        {this.props.date}
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

export default Date;
