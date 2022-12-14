import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    axios.get("http://localhost:3002/dogs").then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> BIG BIG BIG </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx BIG BIG BIG </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
