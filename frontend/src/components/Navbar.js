import React from 'react'

  class Navbar extends React.Component {
    state = {
      age: "any",
      size: "any",
      gender: "any",
      zip: "77002",

    }

    handleSubmit = (e) => {
      e.preventDefault()
      debugger
    }

    render() {
      return (
        <div className='Navbar'>
          <form onSubmit={this.handleSubmit}>
            Age: <select id="age">
              <option selected value="any">Any</option>
              <option value="puppy">Puppy</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
            Size: <select>
              <option selected value="any">Any</option>
              <option value="size">Size</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">XL</option>
            </select>
            Gender: <select>
              <option selected value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            Enter Zip: <input value="77002"/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }

export default Navbar;
