import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1;
  text-align: center;
  height: 35px;

  & + div {
    border-bottom: 3px solid black;
  }


  .tab {
    height: 35px;
    border-bottom: 3px solid transparent;
  }

  .tab-active {
    border-bottom: 3px solid #52e5e7 !important;
  }

   a {
    padding-bottom: 10px;
    color: #fff;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
`
