import React from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
// import { postGoal } from '../actions/postGoal'
// import { Route, Switch, NavLink, withRouter } from 'react-router-dom';

class LogForm extends React.Component{
  constructor(props){
    super();

    this.state = {
      user_id: 1,
      goal_id: props.selected_goal.id,
      date: '',
      binary_input: false,
      amount_input: 0
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.postGoal(this.state)
  }

  this.state = {
    user_id: 1,
    goal_id: props.selected_goal.id,
    date: '',
    binary_input: false,
    amount_input: 0
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <h4>Goal: {this.props.selected_goal.name}</h4>
        <form>
          Date: <input type='date' value={this.state.date}/>
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

export default connect(mapStateToProps, null)(LogForm)
