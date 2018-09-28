import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import DogCardContainer from './components/DogCardContainer'
import Adapter from './Adapter'

class App extends Component {
  state = {
    age: "any",
    size: "any",
    gender: "any",
    zip: "77002",
    dogArray: [],
  }


  handleSubmit = (e) => {
    e.preventDefault()
    Adapter.getDogData(this.state.zip, this.handleAPIData)
  }

  handleAPIData = data => {
    this.setState({
      dogArray: data
    })
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
