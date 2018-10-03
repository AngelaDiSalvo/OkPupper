import React from 'react'

const DogSavedFront = (props) => {
  const imgUrls = props.dogData.photos
  console.log(props.dogData.pet_finder_id);
  return (
    <div className='DogSavedFront'>
      <img className="card-img-top" src={imgUrls[0]} onClick={props.toggleCard} /><br/>
      <h5 class="card-title">{props.dogData.name}</h5>
      <p className="card-text">Age: {props.dogData.age}<br/>
      Breed: {props.dogData.breed}<br/>
      Gender: {props.dogData.sex}<br/>
      Details: {props.dogData.description}</p>
    </div>
  )
}

export default DogSavedFront;
