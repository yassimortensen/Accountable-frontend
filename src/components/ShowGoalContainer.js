import React, { Component } from 'react';
import '../App.css';
import { getGoalData } from '../actions/getGoalData';
import { connect } from "react-redux";
import AmountsGraph from './AmountsGraph';
import BinaryGraph from './BinaryGraph';

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
    } else if (this.props.selected_goal.binary === true) {
      content = <BinaryGraph />
    } else {
      content = <AmountsGraph />
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
