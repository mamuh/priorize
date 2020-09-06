import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: 30px solid #367da7;
    color: #fff;
    background: rgb(0,0,0);
    background: linear-gradient(150deg, rgba(68,157,209,1) 0%, rgba(81,223,229,1) 100%);

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40%;
    width: 80%;
  }

  .google-button {
    padding: 22px 30px;
    border-radius: 30px;
    background: #dc4b38;
    border: none;
    color: #fff;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  @media only screen and (min-width: 700px) {
    .google-button {
      width: 300px;
    }
  }
`
