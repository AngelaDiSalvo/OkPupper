import React from 'react'
import PropTypes from 'prop-types'
import '../css/homepage.css';

const Login = (props) => {
  return (
    <div id='login-box'>
      <div class="left">
        <form onSubmit={console.log}>
          <label>
            Username:
            <input type="text" username="username"/>
            Password:
            <input type="text" password="password"/>
          </label>
          <input type="submit" value="Login"/>
        </form>
      </div>
  </div>
  )
}

export default Login
