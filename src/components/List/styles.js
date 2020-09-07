import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  height: 100%;

  ul:last-child {
    margin-bottom: 100px;
  }

  @media only screen and (max-width: 700px) {
    ul:last-child {
    margin-bottom: 130px;
  }
  }

`
