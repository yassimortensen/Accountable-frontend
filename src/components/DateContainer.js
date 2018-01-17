import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';

import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';

import Date from './Date'

class DateContainer extends Component {

  render() {

    const dateComponents = this.props.dates.map((date, index) => (
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

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//       getUser: getUser
//     }, dispatch)
// }

export default connect(mapStateToProps, null)(DateContainer) ;
