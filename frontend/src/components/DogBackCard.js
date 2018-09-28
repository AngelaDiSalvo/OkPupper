import React from 'react'

const DogBackCard = (props) => {
  return (
    <div className='DogBackCard' onClick={props.toggleCard}>
      Name: {props.dogData.name}<br/>
      Description: {props.dogData.description}<br/>
    </div>
  )
}

export default DogBackCard;
