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
    fetch('http://localhost:3000/dogs')
      .then(r => r.json())
      .then(this.saveDogs)
    // (async () => {
    //   const dogArray = await Adapter.getDogData(this.state.zip)
    //
    //   this.setState({
    //     dogArray: dogArray
    //   }, (data) => console.log(this.state.dogArray))
    // })()
  }

  saveDogs = (dogArray) => {
    this.setState({dogArray})
  }

  handleClick = (e) => {
    const newArray = this.state.dogArray
    newArray.shift()
    let yesOrNo = true
    e.target.name === "save" ? yesOrNo = true : yesOrNo = false
    debugger
    Adapter.saveDogResult(this.state.dogArray[0].id, yesOrNo)
    this.setState({
      dogArray: newArray
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
          <DogCardContainer
            dogArray={this.state.dogArray}
            handleClick={this.handleClick}
          />
        </p>
      </div>
    );
  }
}

export default App;
