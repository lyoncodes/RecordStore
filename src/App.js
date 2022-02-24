import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import records from './data';
import Record from './components/Record';
import RecordForm from './components/NewRecord';

const App = () => {
  // hooks (define the data passed to children components)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Record Store</h1>
        <Record
          records={records}
        />
        <RecordForm/>
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
