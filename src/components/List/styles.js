import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  min-height: 100%;

  ul:last-child {
    margin-bottom: 100px;
  }

  .footer-clear {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    ul:last-child {
      margin-bottom: 130px;
    }

    .footer-clear {
      display: block;
      opacity: 0;
    }


  }

`
