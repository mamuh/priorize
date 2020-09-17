import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router';
import GlobalStyle from '../../styles/global';
import { Container } from './styles';
import app from '../../base';
import { AuthContext } from '../../Auth';
import LoginForm from './LoginForm';
import * as firebase from "firebase/app";
import "firebase/auth";



const Login = ({ history }) => {
  const [shouldDisplayForm, showForm] = useState(false);
  const [isLoading, handleLoad] = useState(false);
  const [logInFailed, handleFailure] = useState(false);


  const handleLogin = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      handleLoad(true);
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        handleLoad(false);
      history.push("/vagas");
    } catch(error) {
      handleFailure(true)
      email.value = "";
      password.value = "";
    }
  }, [history]);

  // const handleGoogleLogin = () => {
  //   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithRedirect(googleAuthProvider);
  // }

  const handleGoogleLogin = useCallback(async event => {
    event.preventDefault();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    try {
      handleLoad(true);
      await firebase.auth().signInWithRedirect(googleAuthProvider);
      handleLoad(false);
      history.push("/vagas");
    } catch(error) {
      handleFailure(true)
      console.log(error)
    }
  }, [history]);

  // let history = useHistory()

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   console.log(response.profileObj)
  //   history.push('/vagas')
  // }

  const { currentUser } = useContext(AuthContext);

  if(currentUser) {
    return <Redirect to="/vagas" />
  }

  const handleClick = () => {
    showForm(true)
  }

  return (
    <Container>
      <div className="content">
        <h1>P R I O R I Z E</h1>
        {
          shouldDisplayForm ?
          <LoginForm
            handleLogin={handleLogin}
            handleGoogleLogin={handleGoogleLogin}
            logInFailed={logInFailed}
            handleLoad={handleLoad}
          />
            :
          <button onClick={handleClick}>Entrar com email</button>
        }
          <button onClick={handleGoogleLogin}>Entrar com Google</button>
        { isLoading ? "Carregando..." : null }
      </div>
    <GlobalStyle />
    </Container>
  );
}

export default withRouter(Login);

//
          // <GoogleLogin
          //   clientId="914438730685-ph5j5bkec0v0eicoeo8lagp763nor8aj.apps.googleusercontent.com"
          //   buttonText="ENTRAR COM GOOGLE"
          //   onSuccess={responseGoogle}
          //   onFailure={null}
          //   cookiePolicy={'single_host_origin'}
          //   isSignedIn={true}
          // />
