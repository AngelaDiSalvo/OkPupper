import React from 'react'
import PropTypes from 'prop-types'
import Signup from "./Signup"
import Login from "./Login"
import '../css/homepage.css';

const Homepage = (props) => {
  //have a button that redirects you to either the login or signup page
  if (props.toggleSignUp === false && props.toggleLogin === false) {
    return (
      <div id='login-box'>
        <div class="left">
          <h1>Welcome to OkPupper</h1>
          <button className='button' onClick={e => props.signUpRedirect(e)}>Sign up</button>
          <button className='button' onClick={e => props.loginRedirect(e)}>Login</button>
        </div>
      </div>
      )
    } else if (props.toggleSignUp === true) {
      return (
        <div>
          <Signup submitCredentials={props.submitCredentials}/>
        </div>
      )
    } else if (props.toggleLogin === true) {
      return (
        <div>
          <Login handleLogin={props.handleLogin}/>
        </div>
      )
    }
}


export default Homepage
