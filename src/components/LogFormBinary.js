import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postLog } from '../actions/postLog';
// import { Route, Switch, NavLink, withRouter } from 'react-router-dom';

class LogFormBinary extends React.Component{
  constructor(props){
    super();

    this.state = {
      user_id: 1,
      goal_id: props.selected_goal.id,
      date: '',
      binary_input: true,
      amount_input: undefined
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
    return(
      <div>
        <h4>Goal: {this.props.selected_goal.name}</h4>
        <p>{this.props.selected_goal.description}</p>
        <form onSubmit={this.handleSubmit}>
          Date: <input onChange={this.handleChange} type='date' name='date' value={this.state.date}/>
          Did you complete your goal?
          <select onChange={this.handleChange} name="binary_input">
            <option value='' defaultValue></option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type='submit' />
        </form>
      </div>
    )
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

export default withRouter(connect(mapStateToProps, { postLog })(LogFormBinary))
