import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 15px 20px;
  margin: 20px;
  border-radius: 3px;
  cursor: grab;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .job-name {
    width: 50%;
    text-overflow: ellipsis;
    overflow:hidden;
  }
`
