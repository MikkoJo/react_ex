import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Langs from './modules/langs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langs: [],
      code: '',
      name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    // console.log(event.currentTarget);
    // console.log(event.target.id);
    // console.log(event.target.value);
    if(event.target.id === 'code') {
      this.setState({code: event.target.value});
    }
    else if(event.target.id === 'name') {
      this.setState({name: event.target.value});
    }
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    // console.log(event);
    // this.getValue('name');
    console.log(this.state.langs);
    const data = new FormData(event.target);
    // console.log(data);
    data.forEach(d => console.log(d));
    let object = {};
    data.forEach((value, key) => {object[key] = value});
    // console.log(JSON.stringify(object));
    const oldLangs = this.state.langs;
    const newLangs = oldLangs.push(object);
    // console.log(newLangs);
    this.setState({langs: newLangs});
    // this.setState({langs: this.state.langs.push(object)});
    // this.state.langs.push(object);
    console.log(this.state.langs);
    // console.log(this.state);
    this.postNewLang(object);
  }

  componentDidMount() {
    fetch('http://localhost:8080/langs')
      .then(res => res.json())
      .then((data => {
        this.setState({ langs: data })
      })
      )
      .catch(console.log)
  }

  postNewLang(data) {
    fetch('http://localhost:8080/langs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)    
    });

  }

  render() {
    // console.log(this.state.langs);
    return (
      <div className="App">
        <header className="App-header">
          <h2>Enter new language</h2>
          <form id='newLang' onSubmit={this.handleSubmit}>
            <label htmlFor='code'>Code:</label>
            <input id='code' name='code' type='text' size='2' maxLength='2' value={this.state.code} onChange={this.handleChange}></input><br />
            <label htmlFor='name'>Name:</label>
            <input id='name' name='name' type='text' value={this.state.lang} onChange={this.handleChange}></input><br />
            <button type='submit'>Post language</button>
          </form>

          <ol>
            {this.state.langs.map(lang => { return <li key={lang.code}>{lang.name}</li> })}
          </ol>
          <Langs langs={this.state.langs} />
        </header>
      </div>
    );
  }
}

export default App;
