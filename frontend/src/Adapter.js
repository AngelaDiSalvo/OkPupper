class Adapter {
  static async getDogData(zipCode) {
    let result = await fetch('http://localhost:3000/dogs')
    let dogs = await result.json()
  
    console.log(dogs["pet"])
    
    return dogs["pet"].map(dog => ({
      pet_finder_id: dog[pet_finder_id],
      name: dog[name],
      age: dog[age],
      size: dog[size],
      breed: dog[breed],
      sex: dog[sex],
      description: dog[description],
      last_update: dog[last_update]
    }))
  }
}

export default Adapter
