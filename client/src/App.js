import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MVP from './containers/mvp'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Ebay!</h1>
        <p className="App-intro">
        <MVP />
        </p>
      </div>
    );
  }
}

export default App;
