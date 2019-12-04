import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FruitBasket from './modules/FruitBasket';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends Component {
  basket = new FruitBasket();

  render() {
    this.basket.addFruit("Appelsiini");
    this.basket.addFruit("Viinimarja");
    this.basket.addFruit("Omena");
    this.basket.addFruit("Päärynä");
    this.Sparams = new URLSearchParams(new URL(window.location).search);
    // {console.log(this.Sparams.toString())};
    // {console.log(this.Sparams.get("filter"))};
    return (
      <Router>
        <Switch>
          <Route path="/fruits">
          {this.filt = this.Sparams.get("filter")}
            {this.result = this.basket.searchFruits(this.filt)}
            <div className="App">
              <header className="App-header">
{/*                <img src={logo} className="App-logo" alt="logo" />
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
        </a>*/}
                  <ul>
                    {this.filt === null ?
                      this.basket.listFruits().map(fruit => { return <li key={fruit}>{fruit}</li> })
                      :
                      this.result.map(fruit => { return <li key={fruit}>{fruit}</li> })

                    }
                  </ul>
              </header>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
