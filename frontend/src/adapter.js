class Adapter {
  static async getDogData(zipCode) {
    // note:temporary fetch to api while waiting backend development

    let result = await fetch('http://localhost:3000/pets')
    let dogs = await result.json()

    return dogs["pet"].map(dog => ({
      pet_finder_id: dog["id"]["$t"],
      name: dog["name"]["$t"],
      age: dog["age"],
      size: dog["size"]["$t"],
      breed: dog["breeds"]["breed"][0]["$t"],
      sex: dog["sex"]["$t"],
      description: dog["description"]["$t"],
      last_update: dog["lastUpdate"]["$t"]
    }))
  }
}

export default Adapter
