import React from 'react';
import GlobalStyle from './styles/global';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

function Profile() {
  let history = useHistory()

  const logout = (response) => {
    console.log(response);
    history.push('/')
  }

  return (
    <>
      <div className="login-page">
        <div className="content">
          <h1>My profile</h1>
          <GoogleLogout
            clientId="914438730685-ph5j5bkec0v0eicoeo8lagp763nor8aj.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout>
        </div>
      </div>
      <GlobalStyle />
    </>
  );
}

export default Profile;
