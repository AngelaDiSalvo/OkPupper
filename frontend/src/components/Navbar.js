import React from 'react'
// note: need to add is-valid-zip validation here. https://medium.com/@gaperton/react-forms-with-value-links-part-2-validation-9d1ba78f8e49
  class Navbar extends React.Component {
    render() {
      return (
        <div className='Navbar'>
          <form onSubmit={this.props.handleSubmit}>
            Age: <select onChange={this.props.handleAgeChange}>
              <option selected value="any">Any</option>
              <option value="puppy">Puppy</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
            Size: <select onChange={this.props.handleSizeChange}>
              <option selected value="any">Any</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">XL</option>
            </select>
            Gender: <select onChange={this.props.handleGenderChange}>
              <option selected value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            Enter Zip: <input onChange={this.props.handleZipChange}/>
            <input type="submit" value="Submit" />
          </form>
          <div>
            <h1><button onClick={this.props.showSavedDogs}><h1>Toggle Saved Dogs</h1></button></h1>
          </div>
        </div>
      )
    }
  }

export default Navbar;
