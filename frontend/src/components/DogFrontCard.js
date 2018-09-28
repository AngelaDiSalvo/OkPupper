import React from 'react'

const DogFrontCard = (props) => {
  return (
    <div className='DogFrontCard' onClick={props.toggleCard}>
      Front
      {/* {props.image}
      {props.name}
      {props.age}
      {props.breed}
      {props.gender}
      {props.zipCode} */}
      <button>not today</button>
      <button>save</button>
    </div>
  )
}

export default DogFrontCard;
