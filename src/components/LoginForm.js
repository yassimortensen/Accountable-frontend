import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { login, createUser } from '../actions/getAuthUser'

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
    this.props.createUser(this.state.create_name, this.state.create_email, this.state.create_password)
    this.props.history.push('/goals')
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.props.history.push('/goals')
  }

  render(){
    // console.log(this.state)
    return(
      <div style={{margin: '2%', textAlign: 'center'}}>
        <div>
          <i className="material-icons" style={{fontSize: '48px'}}>spellcheck</i>
          <h4>Welcome to Accountable</h4>
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

export default withRouter(connect(null, { login, createUser })(LoginForm))
