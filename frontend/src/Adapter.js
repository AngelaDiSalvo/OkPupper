class Adapter {
  static async getDogData(args) {
    const {zipCode, size, gender, age, offset, callbackFunction} = args

    let result = await fetch('http://localhost:3000/user_dogs/get_dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+localStorage.token
      },
      body: JSON.stringify({
        dog: {
          zipCode,
          size,
          gender,
          age,
          offset
        }
      })
    })

    let all_data = await result.json()

    let dogs = all_data["dogs"]
    let searchOffset = all_data["search_offset"]

    if (dogs) {
      const formattedDogs = Adapter._formatDogs(dogs)
      return callbackFunction(formattedDogs, searchOffset)
    } else {
      console.log("No dogs matching criteria")
    }
  }

  static async saveDogResult(petFinderId, isUserSaving) {
    let result = await fetch('http://localhost:3000/user_dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+localStorage.token
      },
      body: JSON.stringify({
        user_dog: {
            petFinderId,
          isUserSaving
        }
      })
    })

    let dogs = await result.json()
  }

  static async getSavedDogs() {
    let result = await fetch('http://localhost:3000/user_dogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '+localStorage.token
      }
    })
    
    let dogs = await result.json()

    console.log(dogs);
  }

  static async createNewUser(args) {
    const {email, password} = args

    let result = await fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })
  }

  static async loginUser(args) {
    const {email, password} = args

    let result = await fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })
    .then(resp => resp.json())
    .then(data_with_token => {
        if (!!data_with_token.jwt) {
          localStorage.token = data_with_token.jwt;
      }
    })
  }

  static _formatDogs(dogsObjectArray) {
    return dogsObjectArray.map(dog => Adapter._parseOneDog(dog))
  }

  static _parseOneDog(dogObject) {
    return ({
      pet_finder_id: dogObject.pet_finder_id,
      name: dogObject.name,
      age: dogObject.age,
      size: dogObject.size,
      breed: dogObject.breed,
      sex: dogObject.sex,
      description: dogObject.description,
      last_update: dogObject.last_update,
      photos: dogObject.photos
    })
  }
}

export default Adapter
