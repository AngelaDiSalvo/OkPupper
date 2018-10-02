import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import DogCardContainer from './components/DogCardContainer'
import Adapter from './Adapter'
import Homepage from "./components/Homepage"

class App extends Component {
  state = {
    age: "any",
    size: "any",
    gender: "any",
    zip: "77002",
    dogArray: [],
    searchOffset: false,
    username: "",
    password: "",
    zipCode: "",
    email: "",
    isLoggedIn: true,
    toggleSignUp: false,
    toggleLogin: false,
    showSavedDogs: false
  }

  componentDidUpdate() {
    console.log(this.state.dogArray.length);
    if (this.state.dogArray.length < 10 && this.state.dogArray.length >= 1) {
      this.getDogData()
    } 
  }

  signUpRedirect = e => {
    this.setState({
      toggleSignUp: true
    })
  }

  loginRedirect = e => {
    this.setState({
      toggleLogin:true
    })
  }

  // const signUpRedirect = e => {
  //   //when something is true, show the signup form.
  //   this.setState({
  //     toggleSignUp: true
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({searchOffset: 0, dogArray: []})
    this.getDogData()
  }
  
  getDogData = () => {
    Adapter.getDogData({
      zipCode: this.state.zip,
      size: this.state.size,
      gender: this.state.gender,
      age: this.state.age,
      offset: this.state.searchOffset,
      callbackFunction: this.saveDogs
    })
  }

  submitCredentials = e => {
    e.preventDefault()
    console.log(e)
    Adapter.createNewUser({
      email: e.target[0].value,
      password: e.target[1].value
    })
  }

  saveDogs = (dogArray, searchOffset) => {
    const combinedDogArray = [...this.state.dogArray, ...dogArray]
    const uniqueDogArray = [...new Set([].concat(...combinedDogArray))]

    this.setState({
      dogArray: uniqueDogArray,
      searchOffset
    })
  }

  handleClick = (e) => {
    e.preventDefault()

    const newArray = this.state.dogArray
    newArray.shift()

    Adapter.saveDogResult(this.state.dogArray[0].pet_finder_id, e.target.name === "save")

    this.setState({
      dogArray: newArray
    })
  }
  
  showSavedDogs = (e) => {
    e.preventDefault()
    console.log(e);
    Adapter.getSavedDogs()
    this.setState({showSavedDogs: true})
    
  }

  render() {
    if (this.state.isLoggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar
            handleSubmit={this.handleSubmit}
            handleAgeChange={(e) => this.setState({age: e.target.value})}
            handleSizeChange={(e) => this.setState({size: e.target.value})}
            handleGenderChange={(e) => this.setState({gender: e.target.value})}
            handleZipChange={(e) => this.setState({zip: e.target.value})}
            showSavedDogs={this.showSavedDogs}
          />
        </header>
        <p className="App-intro">
          <DogCardContainer
            dogArray={this.state.dogArray}
            handleClick={this.handleClick}
          />
        </p>
      </div>
    )
  };

  return (
    <div>
      <Homepage
        signUpRedirect={this.signUpRedirect}
        toggleSignUp={this.state.toggleSignUp}
        loginRedirect={this.loginRedirect}
        toggleLogin={this.state.toggleLogin}
        submitCredentials={this.submitCredentials}
        username={this.state.username}
        password={this.state.password}
        email={this.state.email}
        zipCode={this.state.zipCode}
      />
    </div>
  )
}
}

export default App;
