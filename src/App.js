import React from 'react';
import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import People from './components/People';
import Square from './components/Square';

const App = () => {
  return (
    <>
      <Header />
      <Paragraph />
      <Square />
      <People />
    </>
  );
}

export default App;