import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from '../actions/getAuthUser';

class NavBar extends React.Component{

  handleLogout = (event) => {
    this.props.logout()
    this.props.history.push('/')
  }

  render(){
    return(
      <ul>
        <div style={{width: '25%', textAlign: 'left', display: 'inline-block', fontFamily: 'Mr Bedfort', fontSize:'36px'}}>
          <li><img style={{width:'15%'}} src="https://image.flaticon.com/icons/svg/16/16294.svg" /></li>
          <li><NavLink to='/goals' className="blush" style={{textDecorationColor: '#B8CFF2'}}>Accountable</NavLink></li>
        </div>
        <div style={{width: '50%', textAlign: 'center', display: 'inline-block'}}>
          <li><NavLink to='/add/goal'><i className="material-icons w3-button w3-blue w3-round-xxlarge">add</i></NavLink></li>
        </div>
        <div style={{width: '15%', textAlign: 'center', display: 'inline-block', fontFamily:'Open Sans', fontSize:'18px'}}>
          Logged in as:
          <li style={{fontSize: '36px', fontFamily: 'Zeyada'}}> {this.props.name}</li>
        </div>
        <div onClick={this.handleLogout} style={{width: '10%', textAlign: 'right', display: 'inline-block', textDecorationColor: '#B8CFF2', fontFamily: 'Mr Bedfort', fontSize:'24px'}}>
          <li>Log Out</li>
        </div>
      </ul>
    )
  }
}
export default withRouter(connect(null, { logout })(NavBar))
