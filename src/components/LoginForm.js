import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { login } from '../actions/getAuthUser'

class LoginForm extends React.Component{
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)//.then(() => this.props.history.push('/goals'))
  }

  render(){
    // console.log(this.state)
    return(
      <div style={{margin: '2%'}}>
        <h4>Login Form</h4>
        <form onSubmit={this.handleSubmit}>
          Email: <input onChange={this.handleChange} name='email' type='text' value={this.state.email}/>
          <br />
          Password: <input onChange={this.handleChange} name='password' type='text' value={this.state.password} />
          <br />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { login })(LoginForm))
