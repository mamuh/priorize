import React from 'react';
import { Container, Tabs } from './styles';
import Tab from './Tab';

export default function Header() {
  const tabs = [{name: "PRIORIZADAS"}, {name: "STAND BY"}, {name: "FECHADAS"}]
  return (
    <Container>
      <h2>Vagas</h2>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab name={tab.name} key={index} />
        ))}
      </Tabs>
    </Container>
  );
}
