import React from 'react';
import GlobalStyle from '../../styles/global';
import { Container } from './styles';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory()

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj)
    history.push('/vagas')
  }

  return (
    <>
      <Container>
        <div className="content">
          <h1>P R I O R I Z E</h1>
          <GoogleLogin
            clientId="914438730685-ph5j5bkec0v0eicoeo8lagp763nor8aj.apps.googleusercontent.com"
            buttonText="ENTRAR COM GOOGLE"
            onSuccess={responseGoogle}
            onFailure={null}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default Login;
