import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactExplode from "./components/ExplosionArrow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.og"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ReactExplode />
      </header>
    </div>
  );
}

export default App;
