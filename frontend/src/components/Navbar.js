import React from 'react'
// note: need to add is-valid-zip validation here. https://medium.com/@gaperton/react-forms-with-value-links-part-2-validation-9d1ba78f8e49
  class Navbar extends React.Component {
    render() {
      return (
        <div className='Navbar'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <form className="form-inline my-2 my-lg-0" onSubmit={this.props.handleSubmit}>
                Age: <select className="form-control form-control" onChange={this.props.handleAgeChange}>
                  <option selected value="any">Any</option>
                  <option value="puppy">Puppy</option>
                  <option value="young">Young</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
                Size: <select className="form-control form-control" onChange={this.props.handleSizeChange}>
                  <option selected value="any">Any</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xl">XL</option>
                </select>
                Gender: <select className="form-control form-control" onChange={this.props.handleGenderChange}>
                  <option selected value="any">Any</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                Enter Zip: <input className="form-control form-control" onChange={this.props.handleZipChange}/>
                <input type="submit" value="Submit" />
              </form>
              <div>
                <button className="btn btn-secondary btn-lg" onClick={this.props.showSavedDogs}>Toggle Saved Dogs</button>
              </div>

          </nav>
        </div>
      )
    }
  }

export default Navbar;
