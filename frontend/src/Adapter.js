class Adapter {
  static async getDogData(zipCode, callbackFunction) {
    let result = await fetch('http://localhost:3000/dogs/get_dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dog: {
          zip_code: zipCode
        }
      })
    })
    let dogs = await result.json()
    
    let formattedDogs = dogs.map(dog => ({
      pet_finder_id: dog.pet_finder_id,
      name: dog.name,
      age: dog.age,
      size: dog.size,
      breed: dog.breed,
      sex: dog.sex,
      description: dog.description,
      last_update: dog.last_update,
      photos: dog.photos
    }))
    
    callbackFunction(formattedDogs)
  }
}

export default Adapter
