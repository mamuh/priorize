import React from 'react';
import { Container, Tabs } from './styles';

export default function Tab(props) {

  return (
    <Container>
      <a href="#">{props.name}</a>
    </Container>
  );
}
