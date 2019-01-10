import React, { Component } from 'react';
import logo from './logo.svg';
import Multi from './Multi';
import Test from './Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Multi />
        <Test />
      </div>
    );
  }
}

export default App;
