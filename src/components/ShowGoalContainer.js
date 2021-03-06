import React, { Component } from 'react';
import '../App.css';
import { getGoalData } from '../actions/getGoalData';
import { connect } from "react-redux";
import AmountsGraph from './AmountsGraph';
import AmountsGraphMonth from './AmountsGraphMonth';
import BinaryGraph from './BinaryGraph';

class ShowGoalContainer extends Component {
  constructor(){
    super();

    this.state = {
      monthToggle: true
    }
  }

  componentDidMount(){
    if (!this.props.selected_goal){
      this.props.getGoalData(this.props.match.params.id, this.props.history)
    }
  }

  handleMonthClick = () => {
    this.setState({
      monthToggle: true
    })
  }

  handleYearClick = () => {
    this.setState({
      monthToggle: false
    })
  }

  render() {

    let content;

    if (!this.props.selected_goal){
      content = <div>Loading</div>
    } else if (this.props.selected_goal.logs.length < 365){
      content =
      <div>
        <h1 style={{margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey', fontFamily:'Cabin Sketch'}}>{this.props.selected_goal.name}</h1>
        <div style={{textAlign:'center', backgroundColor: '#F7F7F7', height: '100%'}}>
          <div style={{lineHeight:'100px', fontFamily:'Cabin Sketch', fontSize: '36px'}}>{`You need at least a month of data to see any analytics. Keep logging!`}</div>
        </div>
      </div>
    } else if (this.props.selected_goal.binary === true) {
      content =
      <div>
        <h1 style={{margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey', fontFamily:'Cabin Sketch'}}>{this.props.selected_goal.name}</h1>
        <div style={{textAlign:'center', backgroundColor: '#F7F7F7', height: '100%', paddingTop: '2%'}}>
          <BinaryGraph />
        </div>
      </div>
    } else if (this.props.selected_goal.binary === false && this.state.monthToggle === false) {
      content =
      <div>
        <h1 style={{margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey', fontFamily:'Cabin Sketch'}}>{this.props.selected_goal.name}</h1>
        <div style={{textAlign:'center', backgroundColor: '#F7F7F7', height: '100%'}}>
          <button onClick={this.handleMonthClick} className='w3-button w3-blue w3-round-xxlarge' style={{margin: '2%', display:'inline'}}>See Data for Last Month</button>
          <button onClick={this.handleYearClick} className='w3-button w3-blue w3-round-xxlarge' style={{margin: '2%', display:'inline'}}>See Data for Last Year</button>
          <AmountsGraph />
        </div>
      </div>
    } else if (this.props.selected_goal.binary === false && this.state.monthToggle === true){
      content =
      <div>
        <h1 style={{margins: '0', textAlign: 'left', paddingLeft: '2%', borderBottom: '1px solid lightGrey', fontFamily:'Cabin Sketch'}}>{this.props.selected_goal.name}</h1>
        <div style={{textAlign:'center', backgroundColor: '#F7F7F7', height: '100%'}}>
          <button onClick={this.handleMonthClick} className='w3-button w3-blue w3-round-xxlarge' style={{margin: '2%', display:'inline'}}>See Data for Last Month</button>
          <button onClick={this.handleYearClick} className='w3-button w3-blue w3-round-xxlarge' style={{margin: '2%', display:'inline'}}>See Data for Last Year</button>
          <AmountsGraphMonth />
        </div>
      </div>
    }

    // if (!this.props.selected_goal){
    //   content = <div>Loading</div>
    // } else {
    //   content =
    //   <div style={{display: 'inline-block', textAlign:'center'}}>
    //     <button onClick={handleMonthClick} className='w3-button w3-blue w3-round-xxlarge' style={{margin: '2%'}}>See Data for Last Month</button>
    //     <button onClick={handleYearClick} className='w3-button w3-blue w3-round-xxlarge' style={{margin: '2%'}}>See Data for Last Year</button>
    //   </div>
    // }

    return content
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
