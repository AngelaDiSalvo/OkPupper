import React from 'react'
import DogCard from './DogCard'
import Adapter from '../adapter'


  class DogCardContainer extends React.Component {
    state = {
      dogData: null,
      dogArray: [],
      zipCode: null,
    }

    // componentDidMount(){
    //   this.setState({
    //     dogArray: Adapter.getDogData(this.state.zipCode)
    //   })
    // }

    handleStartClick = (e) => {
      
    }

    render() {
      return (
        <div className='DogCardContainer'>
          <button onClick={this.handleStartClick}>Start</button>
          {this.state.dogData ? null : <DogCard dogData={this.state.dogData}/>}
        </div>
      )
    }
  }

export default DogCardContainer;
