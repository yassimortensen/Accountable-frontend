import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postGoal } from '../actions/postGoal';
// import { Route, Switch, NavLink, withRouter } from 'react-router-dom';

class GoalForm extends React.Component{
  constructor(props){
    super();

    this.state = {
      user_id: props.userId,
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
      <div style={{padding: '2%', textAlign:'center'}}>
        <form onSubmit={this.handleSubmit} className='w3-animate-opacity' style={{margin:'1%', width:'30%', textAlign:'center', display: 'inline-block'}}>
          <input style={{fontFamily:'Zeyada', fontSize:'24px'}} className='w3-input w3-border w3-round-xlarge' placeholder='Name of Goal' onChange={this.handleChange} type='text' name='name' value={this.state.name} /><br />
          <input style={{fontFamily:'Zeyada', fontSize:'24px'}} className='w3-input w3-border w3-round-xlarge' placeholder='Description' onChange={this.handleChange} type='textarea' name='description' value={this.state.description}/><br />
          <p style={{marginTop: '0', fontSize: '18px'}}>How many times per week would you like to complete your goal?</p>
          <select className="w3-select w3-border w3-blue" style={{fontSize:'18px'}} onChange={this.handleChange} name="frequency">
            <option type="number" value='' defaultValue></option>
            <option type="number" value='1'>1</option>
            <option type="number" value='2'>2</option>
            <option type="number" value='3'>3</option>
            <option type="number" value='4'>4</option>
            <option type="number" value='5'>5</option>
            <option type="number" value='6'>6</option>
            <option type="number" value='7'>7</option>
          </select>
          <p style={{fontSize: '18px'}}>Would you like to add amounts to your goal tracking?</p>
          <select className="w3-select w3-border w3-blue" onChange={this.handleChange} name="binary" style={{marginBottom:'10%', fontSize:'18px'}}>
            <option defaultValue></option>
            <option value={false}>Yes</option>
            <option value={true}>No</option>
          </select>
          <br />
          <input style={{fontFamily:'Zeyada', fontSize:'24px'}} className='w3-input w3-border w3-round-xlarge' placeholder='Goal Amount' onChange={this.handleChange} type='number' name='amount' value={this.state.amount}/>
          <br />
          <input style={{fontFamily:'Zeyada', fontSize:'24px'}} className='w3-input w3-border w3-round-xlarge' placeholder='Units of Goal Amount' onChange={this.handleChange} type='text' name='unit' value={this.state.unit} />
          <br />
          <input className='w3-button w3-blue w3-round-xxlarge' type='submit' value='Set a New Goal'/>
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

export default withRouter(connect(mapStateToProps, {postGoal})(GoalForm))
