import React from 'react';
import logo from '../shared/imgages/logo.svg';
// We import our Home component here...
import Home from '../components/Home/Home';
import '../components/App.css';

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Here we add our Home component to be render it */}
      </header>
      <Home />
    </div>
  );
}

export default App;
