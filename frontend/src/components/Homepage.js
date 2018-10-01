import React from 'react'
import PropTypes from 'prop-types'
import Signup from "./Signup"
import Login from "./Login"

const Homepage = (props) => {
  //have a button that redirects you to either the login or signup page
  if (props.toggleSignUp === false && props.toggleLogin === false) {
    return (
      <div> Welcome to OkPupper
          <button onClick={e => props.signUpRedirect(e)}>Sign up</button>
          <button onClick={e => props.loginRedirect(e)}>Login</button>
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
          <Login />
        </div>
      )
    }
}


export default Homepage
