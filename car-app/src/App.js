import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const carList = [
    {
    mark: 'BMW',
    model: '650i',
    link: 'http://example.com/1'
  },
  {
    mark: 'Ferrari',
    model: 'F50',
    link: 'http://example.com/1'
  },
  {
    mark: 'Audi',
    model: 'tt', 
    link: 'http://example.com/2'
  }];
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
        <div className="List">
        <ul>
          {['Jopo', 'Mopo', 'Moottoripyörä'].map(function(item) {
            return <li key={item}>{item}</li>
          })}
          </ul>
          <ol>
          {carList.map(function(item) {
            return <li>
              <a className="App-link"
              href={item.link}
              target="_blank"
            rel="noopener noreferrer">
            {item.mark}: {item.model}
            </a>
            </li>
          })}
          </ol>  
          </div>
      </header>
    </div>
  );
}

export default App;
