import styled from 'styled-components';

export const Container = styled.div`
  .tab-active {
    border-bottom: 3px solid #52e5e7;
  }

   a {
    padding-bottom: 10px;
    color: #fff;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    &:hover {
      cursor: pointer;
    }
  }
`
