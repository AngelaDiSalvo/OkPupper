import React from 'react'
import DogFrontCard from './DogFrontCard'
import DogBackCard from './DogBackCard'

class DogCardContainer extends React.Component {
  state = {
    cardFront: true

  }

  toggleCard = () => {
    let toggle = this.state.cardFront
    this.setState({
      cardFront: !toggle
    })
  }

  renderDog = () => {
    return this.state.cardFront ?
    <DogFrontCard
      toggleCard={this.toggleCard} dogData={this.props.dogArray[0]}
      handleClick={this.props.handleClick}
    /> :
    <DogBackCard
      toggleCard={this.toggleCard} dogData={this.props.dogArray[0]}
    />
  }


  render() {
    return (
      <div className='DogCardContainer'>
        {this.props.dogArray.length>0 ? this.renderDog() : null}
      </div>
    )
  }
}

export default DogCardContainer;
