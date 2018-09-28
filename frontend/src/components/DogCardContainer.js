import React from 'react'
import DogFrontCard from './DogFrontCard'
import DogBackCard from './DogBackCard'

class DogCardContainer extends React.Component {
  state = {
    dogData: null,
    dogArray: [],
    cardFront: true

  }

  toggleCard = () => {
    let toggle = this.state.cardFront
    this.setState({
      cardFront: !toggle
    })
  }



  render() {
    return (
      <div className='DogCardContainer'>
        {this.state.cardFront ? <DogFrontCard toggleCard={this.toggleCard} /> : <DogBackCard toggleCard={this.toggleCard} /> }


      </div>
    )
  }
}

export default DogCardContainer;
