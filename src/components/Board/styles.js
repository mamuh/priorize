import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  padding-bottom: 90px;

  button {
    background: #52e5e7;
    border-radius: 20px;
    padding: 10px 20px;
    border: none;
    color: #fff;
    margin-top: 20px;
    font-size: 16px;
  }

  @media only screen and (max-width: 700px) {
    padding-bottom: 100px;
  }
`
