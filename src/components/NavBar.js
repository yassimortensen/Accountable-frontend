import React from 'react';
// import { Route, NavLink } from 'react-router-dom';

class NavBar extends React.Component{
  render(){
    return(
      <ul>
        <div style={{width: '30%', textAlign: 'left', display: 'inline-block'}}>
          <li><i className="material-icons w3-button w3-round-large">bubble_chart</i>Accountable</li>
        </div>
        <div style={{width: '40%', textAlign: 'center', display: 'inline-block'}}>
          <li><i className="material-icons w3-button w3-round-large">add</i></li>
        </div>
        <div style={{width: '30%', textAlign: 'right', display: 'inline-block'}}>
          <li>{this.props.name}</li>
        </div>
      </ul>
    )
  }
}
export default NavBar
