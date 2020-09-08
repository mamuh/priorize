import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    margin-top: 10px;
    padding: 0 30px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .header-container {
    height: 145px;
    background: #449dd1;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 25px solid #367da7;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    transition: height 0.3s;
  }

  header.smaller {
    height: 87px;
    border-top: 15px solid #367da7;
    h2 {
      opacity: 0;
    }
  }

`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
`
