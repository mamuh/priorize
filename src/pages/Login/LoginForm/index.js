import React from 'react';

export default function LoginForm(props) {
  return (
    <form id="login-form" onSubmit={props.handleLogin}>
    { props.logInFailed ? "Usuário ou senha inválidos" : null }
    <br />
     <input name="email" type="email" placeholder="Email" />
      <br/>
      <input name="password" type="password" placeholder="Senha" />
      <br/>
      <button id="login-btn" type="submit">Log in</button>
    </form>
  )
}
