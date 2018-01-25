import React, { Component } from 'react';
import moment from 'moment'
import '../App.css';

class Date extends Component {

  render() {
    return (
      <div style={{fontFamily:'Zeyada', fontSize: '36px', color: '#1F8CE3', lineHeight:'100px', textAlign:'center'}}>
        {moment(this.props.date, 'MMMM Do YYYY').format('dddd')}
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
