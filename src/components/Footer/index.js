import React from 'react';
import { Container } from './styles';
// import { useSelector, useDispatch } from 'react-redux';
// import actions from '../../../actions';
// import c from 'classnames';

export default function Footer() {

  return (
    <Container>
      <div className="footer">
        <img src="https://image.flaticon.com/icons/svg/130/130918.svg" alt="vagas"/>
        <img src="https://image.flaticon.com/icons/svg/2097/2097743.svg" alt=""/>
        <img src="https://image.flaticon.com/icons/svg/3010/3010912.svg" alt=""/>
        <img src="https://image.flaticon.com/icons/svg/929/929564.svg" alt=""/>
      </div>
    </Container>
  );
}
