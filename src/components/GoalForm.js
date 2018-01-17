import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postGoal } from '../actions/postGoal';
// import { Route, Switch, NavLink, withRouter } from 'react-router-dom';

class GoalForm extends React.Component{
  constructor(){
    super();

    this.state = {
      user_id: 1,
      name: '',
      description: '',
      frequency: undefined,
      binary: false,
      amount: undefined,
      unit: undefined
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postGoal(this.state).then(() => this.props.history.push('/goals'))
  }


  render(){
    return(
      <div style={{padding: '2%'}}>
        <h4>Set a New Goal</h4>
        <form onSubmit={this.handleSubmit}>
          Name of Goal: <input onChange={this.handleChange} type='text' name='name' value={this.state.name} /><br />
          Description: <input onChange={this.handleChange} type='textarea' name='description' value={this.state.description}/><br />
          <p>How many times per week would you like to complete you goal?</p>
          <select onChange={this.handleChange} name="frequency">
            <option type="number" value='' defaultValue></option>
            <option type="number" value='1'>1</option>
            <option type="number" value='2'>2</option>
            <option type="number" value='3'>3</option>
            <option type="number" value='4'>4</option>
            <option type="number" value='5'>5</option>
            <option type="number" value='6'>6</option>
            <option type="number" value='7'>7</option>
          </select><br />
          <p>Would you like to add amounts to your goal tracking?</p>
          <select onChange={this.handleChange} name="binary">
          <option defaultValue></option>
            <option value={false}>Yes</option>
            <option value={true}>No</option>
          </select><br />
          Amount: <input onChange={this.handleChange} type='number' name='amount' value={this.state.amount}/>
          Unit: <input onChange={this.handleChange} type='text' name='unit' value={this.state.unit} /><br />

          <input type='submit'/>
        </form>
      </div>
    )
  }
}
export default withRouter(connect(null, {postGoal})(GoalForm))
