import React from 'react'
import PropTypes from 'prop-types'
import '../css/homepage.css';

const Login = (props) => {
  return (
    <div id='login-box'>
      <div class="left">
        <form onSubmit={e => props.handleLogin(e)}>
          <label>
            Username:
            <input type="text" username="email"/>
            Password:
            <input type="password" password="password"/>
          </label>
          <input type="submit" value="Login"/>
        </form>
      </div>
  </div>
  )
}

export default Login
