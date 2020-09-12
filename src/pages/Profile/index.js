import React from 'react';
import Footer from '../../components/Footer'
import GlobalStyle from '../../styles/global';
import { Container } from './styles';
import app from '../../base';
// import { GoogleLogout } from 'react-google-login';
// import { useHistory } from 'react-router-dom';

function Profile() {
  // let history = useHistory()

  // const logout = (response) => {
  //   console.log(response);
  //   history.push('/')
  // }

  return (
    <>
      <Container>
        <h1>My profile</h1>
        <button onClick={() => app.auth().signOut()}>Log Out</button>
      <GlobalStyle />
      </Container>
      <Footer />
    </>
  );
}

export default Profile;

        // <GoogleLogout
        //   clientId="914438730685-ph5j5bkec0v0eicoeo8lagp763nor8aj.apps.googleusercontent.com"
        //   buttonText="Logout"
        //   onLogoutSuccess={logout}
        // >
        // </GoogleLogout>
