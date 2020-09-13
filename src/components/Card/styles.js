import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 15px 20px;
  margin: 0 20px 20px 20px;
  border-radius: 3px;
  cursor: grab;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 50%;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .details {
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid rgba(0,0,0, 0.1);
    display: none;
  }

  .card-expanded {
    display: grid !important;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    text-align: left;
  }

  .job-name {
    width: 65%;
    text-align: left;
    h5 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .faded {
    opacity: 0.5;
  }

  .card-data {
    margin: 2px 0 3px 0;
  }
`
