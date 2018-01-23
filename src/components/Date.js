import React, { Component } from 'react';
import moment from 'moment'
import '../App.css';

class Date extends Component {

  render() {
    return (
      <div>
        <p style={{fontFamily:'Zeyada', fontSize: '36px'}}>{moment(this.props.date, 'MMMM Do YYYY').format('dddd')}</p>
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
