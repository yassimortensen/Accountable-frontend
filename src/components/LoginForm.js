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

  // <div style={{textAlign: 'center'}}>
  //   <video autoPlay muted loop id="myVideo">
  //     <source src="./Muji_Doodle.mp4" type="video/mp4" />
  //   </video>
  //   <div class="content">
  //     <i className="material-icons" style={{fontSize: '48px'}}>spellcheck</i>
  //     <h4 style={{fontFamily: 'Mr Bedfort', fontSize:'80px'}}>Accountable</h4>
  //     <h5 style={{fontFamily: 'Zeyada', fontSize: '36px'}}>Track your goals to build a more positive life</h5>
  //     <form onSubmit={this.handleNewAccount} style={{width:'20%', textAlign:'center', display: 'inline-block'}}>
  //       <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='create_name' type='text' placeholder='Name' value={this.state.create_name} /><br />
  //       <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='create_email' type='text' placeholder='Email' value={this.state.create_email} /><br />
  //       <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='create_password' type='text' placeholder='Password' value={this.state.create_password} /> <br />
  //       <input className='w3-button w3-blue w3-round-xxlarge' style={{marginTop:'1%'}} type='submit' value='Create an Account' />
  //     </form>
  //     <h5 style={{fontFamily: 'Zeyada', fontSize: '36px'}}>OR</h5>
  //     <form onSubmit={this.handleLogin} style={{width:'20%', textAlign:'center', display: 'inline-block'}}>
  //       <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='email' type='text' placeholder='Email' value={this.state.email}/><br />
  //       <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='password' type='text' placeholder='Password' value={this.state.password} /><br />
  //       <input className='w3-button w3-blue w3-round-xxlarge' style={{marginTop:'1%'}} type='submit' value='Log in' />
  //     </form>
  //   </div>
  // </div>

  render(){
    // console.log(this.state)

    return(
      <div style={{margin: '2%', textAlign: 'center', backgroundImage: `url("./lined_paper_@2X.png")`}}>
        <div>
          <img style={{width:'10%'}} src="https://image.flaticon.com/icons/svg/16/16294.svg" />
          <h4 style={{fontFamily: 'Mr Bedfort', fontSize:'80px'}}>Accountable</h4>
        </div>
        <h5 style={{fontFamily: 'Zeyada', fontSize: '36px'}}>Track your goals to build a more positive life</h5>
        <form onSubmit={this.handleNewAccount} style={{width:'20%', textAlign:'center', display: 'inline-block'}}>
          <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='create_name' type='text' placeholder='Name' value={this.state.create_name} /><br />
          <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='create_email' type='text' placeholder='Email' value={this.state.create_email} /><br />
          <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='create_password' type='text' placeholder='Password' value={this.state.create_password} /> <br />
          <input className='w3-button w3-blue w3-round-xxlarge' style={{marginTop:'1%'}} type='submit' value='Create an Account' />
        </form>
        <h5 style={{fontFamily: 'Zeyada', fontSize: '36px'}}>OR</h5>
        <form onSubmit={this.handleLogin} style={{width:'20%', textAlign:'center', display: 'inline-block'}}>
          <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='email' type='text' placeholder='Email' value={this.state.email}/><br />
          <input className='w3-input w3-border w3-round-xlarge' onChange={this.handleChange} name='password' type='text' placeholder='Password' value={this.state.password} /><br />
          <input className='w3-button w3-blue w3-round-xxlarge' style={{marginTop:'1%'}} type='submit' value='Log in' />
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, { login, createUser })(LoginForm))
