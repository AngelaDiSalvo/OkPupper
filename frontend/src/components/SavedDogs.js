import React from 'react'
import DogSavedFront from './DogSavedFront'

class SavedDogs extends React.Component {
  state = {
    cardFront: true

  }

  displaySavedDogs = () => {
    console.log(this.props.savedDogs)
    return this.props.savedDogs.map( dog => {
      return (
        <DogSavedFront
          dogData={dog}
          handleClick={this.props.handleClick}
        />
      )
    })
  }

  render() {
    return (
      <div className='SavedDogs'>
        {this.displaySavedDogs()}
      </div>
    )
  }
}

export default SavedDogs;
