import React from 'react';
import { Container, Tabs } from './styles';
import Tab from './Tab';

export default function Header() {
  function setActive(e) {
    e.target.classList.add("tab-active")
    console.log(e.target.innerHTML)
  }

  return (
    <Container>
      <h2>Vagas</h2>
      <Tabs>
        <Tab name={"PRIORIZADAS"} onClick={setActive} />
        <Tab name={"STAND BY"} onClick={setActive}/>
        <Tab name={"FECHADAS"} onClick={setActive}/>
      </Tabs>
    </Container>
  );
}
