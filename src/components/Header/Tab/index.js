import React from 'react';
import { Container } from './styles';

export default function Tab(props) {

  return (
    <Container>
      <a href="#">{props.name}</a>
    </Container>
  );
}
