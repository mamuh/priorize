import React, {useState} from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

function App() {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
