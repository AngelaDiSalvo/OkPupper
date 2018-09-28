import React from 'react'

const DogFrontCard = (props) => {
  const imgUrls = JSON.parse(props.dogData.photos)
  return (
    <div className='DogFrontCard'>
      <img src={imgUrls[2]} onClick={props.toggleCard} /><br/>
      Name: {props.dogData.name}<br/>
      Age: {props.dogData.age}<br/>
      Breed: {props.dogData.breed}<br/>
      Gender: {props.dogData.sex}<br/>
      <button name="remove" onClick={props.handleClick}>not today</button>
      <button name="save" onClick={props.handleClick}>save</button>
    </div>
  )
}

export default DogFrontCard;
