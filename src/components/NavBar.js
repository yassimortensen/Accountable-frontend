import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends React.Component{
  render(){
    return(
      <ul>
        <div style={{width: '25%', textAlign: 'left', display: 'inline-block'}}>
          <li><NavLink to='/goals'><i className="material-icons w3-button w3-round-large">bubble_chart</i>Accountable</NavLink></li>
        </div>
        <div style={{width: '50%', textAlign: 'center', display: 'inline-block'}}>
          <li><NavLink to='/add/goal'><i className="material-icons w3-button w3-round-large">add</i></NavLink></li>
        </div>
        <div style={{width: '15%', textAlign: 'center', display: 'inline-block'}}>
          <li>{this.props.name}</li>
        </div>
        <div style={{width: '10%', textAlign: 'right', display: 'inline-block'}}>
          <li>Log Out</li>
        </div>
      </ul>
    )
  }
}
export default withRouter(NavBar)
