import React from 'react';
import Card from '../Card';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header>Expandir todas</header>
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
