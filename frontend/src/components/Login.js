import React from 'react'
import PropTypes from 'prop-types'

const Login = (props) => {
  return (
    <form onSubmit={console.log}>
      <label>
        Username: <input type="text" username="username"/>
        Password: <input type="text" password="password"/>
      </label>
      <input type="submit" value="Login"/>
    </form>
  )
}

export default Login
