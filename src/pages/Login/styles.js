import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-top: 30px solid #367da7;
    color: #fff;
    background: rgb(74,158,207);
    background: linear-gradient(150deg, rgba(74,158,207,1) 0%, rgba(74,158,207,1) 49%, rgba(90,226,229,1) 100%);

  .login-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 50vh;
    width: 100vw;
    button {
      text-transform: uppercase;
      padding: 15px 25px;
      background: #367DA7;
      border-radius: 30px;
      color: white;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
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

  #login-form {
    width: 50%;
    margin: 20px 0 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      border: none;
      padding: 20px;
    }
  }

  @media only screen and (max-width: 700px) {
    #login-form {
      width: 90%;
    }
  }
`
