import React from 'react';
// import { Route, Switch, NavLink, withRouter } from 'react-router-dom';

class GoalForm extends React.Component{
  constructor(){
    super();

    this.state = {
      name: '',
      description: '',
      frequency: undefined,
      binary: false,
      amount: undefined,
      unit: undefined
    }
  }


  render(){
    return(
      <form>
        Name of Goal: <input type='text' value={this.state.name} /><br />
        Description: <input type='textarea' value={this.state.description}/><br />
        <p>How many times per week would you like to complete you goal?</p>
        <input type='text' value={this.state.frequency} />
        <p>Would you like to add amounts to your goal tracking?</p>
        <select name="binary">
          <option value='true' defaultValue>Yes</option>
          <option value='false'>No</option>
        </select><br />
        Amount: <input type='text' value={this.state.amount}/>
        Unit: <input type='text' value={this.state.unit} /><br />

        <input type='submit'/>
      </form>
    )
  }
}
export default GoalForm
