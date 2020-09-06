import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import ExpandButton from './components/ExpandButton';
import Board from './components/Board';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <ExpandButton />
      <Board />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
