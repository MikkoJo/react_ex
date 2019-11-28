import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FruitBasket from './modules';


class App extends Component {
  basket = new FruitBasket();
  
  render() {
    this.basket.addFruit("Appelsiini");
    this.basket.addFruit("Viinimarja");
    this.basket.addFruit("Omena");
    this.basket.addFruit("Päärynä");

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
        <p>
          <ul>
          {this.basket.listFruits().map(fruit => {return <li key={fruit}>{fruit}</li>})

          }
          </ul>
        </p>
      </header>
    </div>
  );
  }
}

export default App;
