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

  def self.parse_one_dog(dog_hash)
    large_photos_hash = dog_hash["media"]["photos"]["photo"].select do |photo_hash|
      photo_hash["@size"] = "x"
    end

    large_photos_array = large_photos_hash.map{|photo| photo["$t"]}

    {
      id: dog_hash["id"]["$t"],
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

#Note:pet.find notes
#key 	string 	required 	your developer key
# animal 	string 	optional 	type of animal (barnyard, bird, cat, dog, horse, reptile, smallfurry)
# breed 	string 	optional 	breed of animal (use breed.list for a list of valid breeds)
# size 	string 	optional 	size of animal (S=small, M=medium, L=large, XL=extra-large)
# sex 	character 	optional 	M=male, F=female
# location 	string 	required 	the ZIP/postal code or city and state where the search should begin
# age 	string 	optional 	age of the animal (Baby, Young, Adult, Senior)
# offset 	string 	optional 	set this to the value of lastOffset returned by a previous call to pet.find, and it will retrieve the next result set
# count 	integer 	optional 	how many records to return for this particular API call (default is 25)
# output 	string 	optional (default=basic) 	How much of each record to return: basic (no description) or full (includes description)
# format 	string 	optional (default=xml) 	Response format: xml, json
