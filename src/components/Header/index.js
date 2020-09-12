import React, { Component } from 'react';
import { Container, Tabs } from './styles';
import Tab from './Tab';

// export default function Header() {
//   const tabs = [{name: "PRIORIZADAS"}, {name: "STAND BY"}, {name: "FECHADAS"}]
//   return (
//     <Container>
//       <h2>Vagas</h2>
//       <Tabs>
//         {tabs.map((tab, index) => (
//           <Tab name={tab.name} key={index} />
//         ))}
//       </Tabs>
//     </Container>
//   );
// }

export default class Header extends Component {
   componentDidMount() {
     window.addEventListener("scroll", this.resizeHeaderOnScroll);
   }

   resizeHeaderOnScroll() {
     const distanceY = window.pageYOffset || document.documentElement.scrollTop,
       shrinkOn = 70,
       headerEl = document.getElementById("js-header");

     if (headerEl && distanceY > shrinkOn) {
       headerEl.classList.add("smaller");
     } else if (headerEl) {
       headerEl.classList.remove("smaller");
     }
   }

   render() {
   const tabs = [{name: "PRIORIZADAS"}, {name: "STAND BY"}, {name: "FECHADAS"}]
     return (
       <Container>
        <header className="header-container" id="js-header">
         <h2>Vagas</h2>
         <Tabs>
           {tabs.map((tab, index) => (
             <Tab name={tab.name} key={index} />
           ))}
         </Tabs>
         </header>
       </Container>
     )
   }
}
