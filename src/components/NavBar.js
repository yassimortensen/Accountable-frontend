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
      <ul style={{color: 'black'}}>
        <div style={{width: '25%', textAlign: 'left', display: 'inline-block', fontFamily: 'Cabin Sketch', fontSize:'36px'}}>
          <img style={{width:'10%', marginTop: '2%', marginRight: '2%'}} src="./001-list-verification.png" />
          <li><NavLink to='/goals' className="blush" style={{textDecorationColor: '#1F8CE3'}}>Accountable</NavLink></li>
        </div>
        <div style={{width: '50%', textAlign: 'center', display: 'inline-block', fontFamily: 'Zeyada', fontSize:'36px', color: '#1F8CE3'}}>
          <li><img style={{maxHeight: '50px', display:"inline", paddingRight: '10px'}} src="./019-shape.png" /></li>
          <li><NavLink to='/add/goal' style={{textDecoration: 'none'}}>make new goal</NavLink></li>
          <li><img style={{maxHeight: '50px', display:"inline", paddingLeft: '10px'}} src="./010-light-bulb-outlined-hand-drawn-tool.png" /></li>
        </div>
        <div style={{width: '15%', textAlign: 'center', display: 'inline-block', fontFamily:'Open Sans', fontSize:'18px'}}>
          Logged in as:
          <li style={{color: '#4DBFB6', fontSize: '36px', fontFamily: 'Zeyada', paddingLeft:'2%', textDecorationColor: '#4DBFB6'}}>{this.props.name}</li>
        </div>
        <div style={{color: 'red', width: '10%', textAlign: 'right', display: 'inline-block', textDecorationColor: 'black', fontFamily: 'Mr Bedfort', fontSize:'24px'}}>
          <li onClick={this.handleLogout}>Log Out</li>
        </div>
      </ul>
    )
  }
}
export default withRouter(connect(null, { logout })(NavBar))
