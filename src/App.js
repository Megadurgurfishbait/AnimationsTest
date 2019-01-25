import React, { Component } from 'react';
import './App.css';
import TestingAnimations from './Components/testingAnimations';
import Header from './Components/Header';
import HeaderMargin from './Components/HeaderMargin';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header/>
            <HeaderMargin />
            <TestingAnimations />

      </div>
    );
  }
}

export default App;
