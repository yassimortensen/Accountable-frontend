import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { login } from '../actions/getAuthUser'

class LoginForm extends React.Component{
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
      create_name: '',
      create_email: '',
      create_password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleNewAccount = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)//.then(() => this.props.history.push('/goals'))
  }

  render(){
    // console.log(this.state)
    return(
      <div style={{margin: '2%', textAlign: 'center'}}>
        <div style={{display:'inline-block'}}>
          <i className="material-icons w3-button w3-round-large" style={{display:'inline'}}>bubble_chart</i>
          <h4 style={{display:'inline'}}>Welcome to Accountable</h4>
        </div>
        <h5>Track your goals to build a more positive life</h5>
        <form onSubmit={this.handleNewAccount}>
          <input onChange={this.handleChange} name='create_name' type='text' placeholder='Name' value={this.state.create_name} /><br />
          <input onChange={this.handleChange} name='create_email' type='text' placeholder='Email' value={this.state.create_email} /><br />
          <input onChange={this.handleChange} name='create_password' type='text' placeholder='Password' value={this.state.create_password} /> <br />
          <input style={{marginTop:'1%'}} type='submit' value='Create an Account' />
        </form>
        <h5>OR</h5>
        <form onSubmit={this.handleLogin}>
          <input onChange={this.handleChange} name='email' type='text' placeholder='Email' value={this.state.email}/><br />
          <input onChange={this.handleChange} name='password' type='text' placeholder='Password' value={this.state.password} /><br />
          <input style={{marginTop:'1%'}} type='submit' value='Log in' />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { login })(LoginForm))
