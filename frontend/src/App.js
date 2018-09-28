import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import DogCardContainer from './components/DogCardContainer'

class App extends Component {
  state = {
    age: "any",
    size: "any",
    gender: "any",
    zip: "77002",
    fetch: null,
  }


  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    debugger
    //here's where we fetch, given the variables in state, then set state
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar
            handleSubmit={this.handleSubmit}
            handleAgeChange={(e) => this.setState({age: e.target.value})}
            handleSizeChange={(e) => this.setState({size: e.target.value})}
            handleGenderChange={(e) => this.setState({gender: e.target.value})}
            handleZipChange={(e) => this.setState({zip: e.target.value})}
          />
        </header>
        <p className="App-intro">
          <DogCardContainer />
        </p>
      </div>
    );
  }
}

export default App;
