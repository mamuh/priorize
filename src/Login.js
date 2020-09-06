import React from 'react';
import GlobalStyle from './styles/global';
import LoginStyle from './styles/login';
import GoogleLogin from 'react-google-login';

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <div className="login-page">
        <div className="content">
          <h1>P R I O R I Z E</h1>
          <GoogleLogin
            clientId="914438730685-ph5j5bkec0v0eicoeo8lagp763nor8aj.apps.googleusercontent.com"
            buttonText="ENTRAR COM GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      </div>
      <LoginStyle />
      <GlobalStyle />
    </>
  );
}

export default Login;
