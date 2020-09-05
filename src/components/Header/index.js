import React from 'react';
import { Container, Tabs } from './styles';

export default function Header() {
  return (
    <Container>
      <h3>Vagas</h3>
      <Tabs>
        <p>PRIORIZADAS</p>
        <p>STAND BY</p>
        <p>FECHADAS</p>
      </Tabs>
    </Container>
  );
}
