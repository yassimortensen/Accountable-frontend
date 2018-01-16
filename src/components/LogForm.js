import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { postLog } from '../actions/postLog'

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
    this.props.postLog(this.state).then(() => this.props.history.push('/goals'))
  }

  render(){
    // console.log(this.state)
    return(
      <div>
        <h4>Goal: {this.props.selected_goal.name}</h4>
        <p>{this.props.selected_goal.description}</p>
        <form onSubmit={this.handleSubmit}>
          Date: <input onChange={this.handleChange} type='date' name='date' value={this.state.date}/>
          Amount: <input onChange={this.handleChange} name='amount_input' type='number' value={this.state.amount_input} />
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

export default withRouter(connect(mapStateToProps, { postLog })(LogForm))
