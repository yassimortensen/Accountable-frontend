import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postLog } from '../actions/postLog';
import { getGoalDataForLogForm } from '../actions/getGoalDataForLogForm'
// import { Route, Switch, NavLink, withRouter } from 'react-router-dom';

class LogFormBinary extends React.Component{
  constructor(props){
    super();

    this.state = {
      user_id: 1,
      goal_id: props.match.params.id,
      date: '',
      binary_input: true,
      amount_input: undefined
    }
  }

  componentWillMount(){
    if (!this.props.selected_goal){
      console.log(this.props.match.params.id)
      this.props.getGoalDataForLogForm(this.props.match.params.id, this.props.history)
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postLog(this.state).then(() => this.props.history.push('/goals'))
  }

  render(){
    let content;

    if (!this.props.selected_goal){
      content = <div></div>
    } else {
      content = (
        <div style={{padding: '2%', textAlign:'center'}}>
          <h4>Submit a Log</h4>
          <h4 style={{fontFamily: 'Cabin Sketch', fontSize: '36px'}}>{this.props.selected_goal.name}</h4>
          <form className='w3-animate-opacity' style={{margin:'1%', width:'30%', textAlign:'center', display: 'inline-block'}} onSubmit={this.handleSubmit}>
            <input className='w3-input w3-border w3-round-xlarge' placeholder='Date' onChange={this.handleChange} type='date' name='date' value={this.state.date}/>
            <br />
            <p style={{marginTop: '0', fontSize: '18px'}}>Did you complete your goal?</p>
            <select className="w3-select w3-border" style={{fontSize:'18px', marginBottom:'10%'}} onChange={this.handleChange} name="binary_input">
              <option value='' defaultValue></option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <input className='w3-button w3-blue w3-round-xxlarge' type='submit' />
          </form>
        </div>
      )
    }


    return content
  }
}

const mapStateToProps = ({users_reducer}) => {
  return {
    ...users_reducer
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//       selectUser: selectUser
//     }, dispatch)
// }

export default withRouter(connect(mapStateToProps, { postLog, getGoalDataForLogForm })(LogFormBinary))
