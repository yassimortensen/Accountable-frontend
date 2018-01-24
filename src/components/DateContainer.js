import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux";

import Date from './Date'

class DateContainer extends Component {

  render() {

    const dateComponents = this.props.dates.map((date, index) => (
      <Date key={index} date={date} />
    ))

    return (
      <div className='DateContainer' style={{borderBottom: '2px solid red'}}>
        <div style={{borderRight:'2px solid red'}}></div>
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
