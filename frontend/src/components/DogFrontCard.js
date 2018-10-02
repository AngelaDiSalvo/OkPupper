import React from 'react'


const DogFrontCard = (props) => {
  const imgUrls = props.dogData.photos
  console.log(props.dogData.pet_finder_id);
  return (
    <div className='DogFrontCard'>
      <img className="card-img-top" src={imgUrls[0]} onClick={props.toggleCard} /><br/>
      <h5 class="card-title">{props.dogData.name}</h5>
      <p className="card-text">Age: {props.dogData.age}<br/>
      Breed: {props.dogData.breed}<br/>
      Gender: {props.dogData.sex}<br/></p>
      <img name="remove" onClick={props.handleClick} src={require('../images/error.png')} style={{width:35}}/>
      <img name="save" onClick={props.handleClick} src={require('../images/success.png')} style={{width:35}}/>
    </div>
  )
}

export default DogFrontCard;
