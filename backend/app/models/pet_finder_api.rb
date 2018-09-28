class PetFinderApi
  def self.get_dogs_array(zip_code)
    #note: how to add optional more dynamic location search
    api_data = RestClient.get(`http://api.petfinder.com/pet.find?format=json&key=#{api_key}&location=#{zip_code}`) #note: enter url here
    parsed_data = JSON.parse(api_data)
    dogs_array = parsed_data["petfinder"]["pets"]["pet"]

    dogs_array.map do |dog_hash|
      self.parse_one_dog(dog_hash)
    end
  end

  def self.get_dog_info(dog_id)
    api_data= RestClient.get(`http://api.petfinder.com/pet.get?format=json&key=#{api_key}&id=#{dog_id}`)
    parsed_data = JSON.parse(api_data)
    dog_hash = parsed_data["petfinder"]["pet"]

    self.parse_one_dog(dog_hash)
  end

  private

  def self.parse_one_dog(dog_hash)
    large_photos_hash = dog_hash["media"]["photos"]["photo"].select do |photo_hash|
      photo_hash["@size"] = "x"
    end

    large_photos_array = large_photos_hash.map{|photo| photo["$t"]}

    #note: need to update how we handle and store photos. could be unknown amount
    
    {
      pet_finder_id: dog_hash["id"]["$t"],
      name: dog_hash["name"]["$t"],
      age: dog_hash["age"],
      size: dog_hash["size"]["$t"],
      breed: dog_hash["breeds"]["breed"]["$t"],
      sex: dog_hash["sex"]["$t"],
      description: dog_hash["description"]["$t"],
      last_update: dog_hash["lastUpdate"]["$t"],
      photos: large_photos_array
    }
  end
end
