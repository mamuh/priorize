import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 100%;
  box-shadow: -10px 0 10px rgba(0,0,0,0.25);
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }

  img {
    width: 35px;
    height: 35px;
  }
`
