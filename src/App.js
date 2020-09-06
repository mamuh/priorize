import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import ExpandButton from './components/ExpandButton';
import Board from './components/Board';

function App() {
  return (
    <>
      <Header />
      <ExpandButton />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
