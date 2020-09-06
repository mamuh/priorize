import React, {useState} from 'react';
// import { DnDProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';


import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
// function App() {
//   return (
//     <>
//       <Header />
//       <Board />
//       <GlobalStyle />
//     </>
//   );
// }


const App = () => {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  )
}

export default App;
