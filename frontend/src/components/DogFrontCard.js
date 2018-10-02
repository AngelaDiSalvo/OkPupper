import React from 'react'


const DogFrontCard = (props) => {
  const imgUrls = props.dogData.photos
  console.log(props.dogData.pet_finder_id);
  return (
    <div className='DogFrontCard'>
      <img src={imgUrls[0]} onClick={props.toggleCard} /><br/>
      Name: {props.dogData.name}<br/>
      Age: {props.dogData.age}<br/>
      Breed: {props.dogData.breed}<br/>
      Gender: {props.dogData.sex}<br/>
      <img name="remove" onClick={props.handleClick} src={require('../images/error.png')} style={{width:35}}/>
      <img name="save" onClick={props.handleClick} src={require('../images/success.png')} style={{width:35}}/>
    </div>
  )
}

export default DogFrontCard;
