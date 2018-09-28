import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import DogCardContainer from './components/DogCardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <p className="App-intro">
          <DogCardContainer />
        </p>
      </div>
    );
  }
}

export default App;
