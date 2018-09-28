import React from 'react'

const DogBackCard = (props) => {
  return (
    <div className='DogBackCard' onClick={props.toggleCard}>
      Back
      {/* {props.name}
        {props.description} */}
    </div>
  )
}

export default DogBackCard;
