import React from 'react';
import Footer from '../../components/Footer'
import GlobalStyle from '../../styles/global';
import { Container } from './styles';
import app from '../../base';
import * as firebase from "firebase/app";

function Profile() {

  const { displayName, email, photoURL } = firebase.auth().currentUser
  console.log(firebase.auth().currentUser)

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
