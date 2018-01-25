import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { postLog } from '../actions/postLog'
import { getGoalDataForLogForm } from '../actions/getGoalDataForLogForm'

class LogForm extends React.Component{
  constructor(props){
    super();

    this.state = {
      user_id: props.userId,
      goal_id: props.match.params.id,
      date: '',
      binary_input: false,
      amount_input: 0
    }
  }

  componentDidMount(){
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
            <p style={{marginTop: '0', fontSize: '18px'}}>Please Enter Amount</p>
            <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='amount_input' type='number' value={this.state.amount_input} />
            <br />
            <input className='w3-button w3-blue w3-round-xxlarge' type='submit' value='Submit Log' />
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

export default withRouter(connect(mapStateToProps, { postLog, getGoalDataForLogForm })(LogForm))
