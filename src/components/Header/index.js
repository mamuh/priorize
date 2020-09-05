import React from 'react';
import { Container, Tabs } from './styles';

export default function Header() {
  return (
    <Container>
      <h2>Vagas</h2>
      <Tabs>
        <p>PRIORIZADAS</p>
        <p>STAND BY</p>
        <p>FECHADAS</p>
      </Tabs>
    </Container>
  );
}
