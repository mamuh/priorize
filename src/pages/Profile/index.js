import React from 'react';
import Footer from '../../components/Footer'
import GlobalStyle from '../../styles/global';
import { Container } from './styles';
import app from '../../base';
import * as firebase from "firebase/app";
// import { GoogleLogout } from 'react-google-login';
// import { useHistory } from 'react-router-dom';

function Profile() {
  // let history = useHistory()

  // const logout = (response) => {
  //   console.log(response);
  //   history.push('/')
  // }

  // console.log(firebase.auth().currentUser)

  const { displayName, email, photoURL } = firebase.auth().currentUser

  return (
    <>
      <Container>
        <h1>My profile</h1>
        <h3>{displayName}</h3>
        <h4>{email}</h4>
        { photoURL ? <img src={photoURL} alt="profile picture" width="150"/> : null }
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
