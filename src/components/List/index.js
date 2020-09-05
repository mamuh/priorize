import React from 'react';
import Card from '../Card';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <button>expandir todas</button>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
}
