import React from 'react';

export default function LoginForm(props) {
  return (
    <form onSubmit={props.handleLogin}>
      <label>
        Email
        <input name="email" type="email" placeholder="Email" />
      </label>
      <br/>
      <label>
        Password
        <input name="password" type="password" placeholder="Password" />
      </label>
      <br/>
      <button type="submit">Log in</button>
    </form>
  )
}
