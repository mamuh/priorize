import React from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';

export default function ExpandButton() {

  return (
    <Container>
      <button>expandir todas</button>
    </Container>
  );
}
