import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';

// import { connect } from "react-redux";
// import { getUser } from "../actions";
// import { bindActionCreators } from 'redux';

import Date from './Date'

class DateContainer extends Component {

  render() {
    // debugger
    const dates = [
      moment().subtract(3, 'days').format('MMMM Do YYYY'),
      moment().subtract(2, 'days').format('MMMM Do YYYY'),
      moment().subtract(1, 'days').format('MMMM Do YYYY'),
      moment().format('MMMM Do YYYY'),
      moment().add(1, 'days').format('MMMM Do YYYY'),
      moment().add(2, 'days').format('MMMM Do YYYY'),
      moment().add(3, 'days').format('MMMM Do YYYY'),
    ]

    const dateComponents = dates.map((date, index) => (
      <Date key={index} date={date} />
    ))

    return (
      <div className='DateContainer' style={{borderBottom: '1px solid lightGrey'}}>
        <div></div>
        {dateComponents}
      </div>
    );
  }
}

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

export default DateContainer ;
