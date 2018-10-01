import React from 'react'
import PropTypes from 'prop-types'
import Signup from "./Signup"
import Login from "./Login"

const Homepage = (props) => {
  //have a button that redirects you to either the login or signup page
  return (
    <div> Welcome to OkPupper
        <button onClick={e => signUpRedirect(e)}>Sign up</button>
        <button onClick={console.log}>Login</button>
    </div>
  )
}
//when button is clicked, the page needs to be redirected
const signUpRedirect = e => {
  //when something is true, show the signup form.
  return (
    <Signup />
  )
}

export default Homepage
