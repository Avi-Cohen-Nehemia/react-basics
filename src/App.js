import React from 'react';
import './App.css';

const App = () => {
  let message = "Hello world!";
  return (
    <>
      <h1 className="alert alert-primary">{ message }</h1>
    </>
  );
}

export default App;