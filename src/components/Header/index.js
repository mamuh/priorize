import React from 'react';
import { Container, Tabs } from './styles';
import c from 'classnames';
// import { useSelector, useDispatch } from 'react-redux';
import Tab from './Tab';

export default function Header() {
  const tabs = [{name: "PRIORIZADAS"}, {name: "STAND BY"}, {name: "FECHADAS"}]
  return (
    <Container>
      <h2>Vagas</h2>
      <Tabs>
        {tabs.map((tab, index) => (
          <Tab name={tab.name} key={index} onClick={null} />
        ))}
      </Tabs>
    </Container>
  );
}
