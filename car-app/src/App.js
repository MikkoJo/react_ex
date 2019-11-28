import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Car {
  constructor(name) { this.brand = name; }
  present() { return 'I have a ' + this.brand; }
}

class SportCar extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model
  }
}

//function App() {
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
class App extends Component {

  myCars = [];
  render() {
    this.myCars.push(new SportCar("Ford", "Mustang"));
    this.myCars.push(new SportCar("BMW", "M8"));
    this.myCars.push(new SportCar("Ferrari", "F50"));
    return (
      <Router>
        <Switch>
        <Route path="/test">
          <div>
            <h2>Test</h2>
          </div>
          </Route>
          <Route path="/">
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
                    {['Jopo', 'Mopo', 'Moottoripyörä'].map(function (item) {
                      return <li key={item}>{item}</li>
                    })}
                  </ul>
                  <ol>
                    {carList.filter(item => item.mark === 'BMW').map(function (item) {
                      return <li key={item}>
                        <a className="App-link"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer">
                          {item.mark}: {item.model}
                        </a>
                      </li>
                    })}
                  </ol>
                  <ol>
                    {this.myCars.map(function (item) {
                      return <li key={item}>
                        <a className="App-link"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer">
                          {item.mark}: {item.model}
                        </a>
                      </li>
                    })}
                  </ol>
                  {/*<p>{mycar.show()}</p>*/}
                </div>
              </header>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
