import React from 'react';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';

export default function Footer() {
  let history = useHistory();

  return (
    <Container>
      <div className="footer">
        <img src="https://image.flaticon.com/icons/svg/130/130918.svg" alt="vagas"/>
        <img src="https://image.flaticon.com/icons/svg/2097/2097743.svg" alt=""/>
        <img src="https://image.flaticon.com/icons/svg/3010/3010912.svg" alt=""/>
        <img src="https://image.flaticon.com/icons/svg/929/929564.svg" alt="" onClick={() => {history.push('/profile')}} />
      </div>
    </Container>
  );
}
