import React, { Component } from 'react';
import '../App.css';
import { getGoalData } from '../actions/getGoalData';

import { connect } from "react-redux";

class ShowGoalContainer extends Component {

  componentDidMount(){
    if (!this.props.selected_goal){
      this.props.getGoalData(this.props.match.params.id, this.props.history)
    }
  }

  render() {

    let content;

    if (!this.props.selected_goal){
      content = <div>Loading</div>
    } else {
      content =(
      <div>
        <h1 style={{margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey'}}>{this.props.goal.name}</h1>
        <div style={{paddingLeft:'10%', display:'inline-block'}}>
          <h2>Overview</h2>
          <p>Did you {this.props.selected_goal.description.toLowerCase()}?</p>
        </div><br />
        <div>
          <h4 style={{display:'inline'}}>Score</h4>
          <h4 style={{display:'inline'}}>Month</h4>
          <h4 style={{display:'inline'}}>Year</h4>
        </div>
      </div>
    )
  }

    return content;
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

export default connect(mapStateToProps, { getGoalData })(ShowGoalContainer);
