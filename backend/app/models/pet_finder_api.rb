class PetFinderApi
  def self.get_dogs_array(filters)
    #note: how to add optional more dynamic location search

    base_api_url = "http://api.petfinder.com/pet.find?format=json&animal=dog&key=#{ENV['petFinderAPIKey']}&"

    converted_filters = self.convert_filters(filters)

    final_api_url = base_api_url + URI.encode_www_form(converted_filters)
    api_data = RestClient.get(final_api_url)
    parsed_data = JSON.parse(api_data)


    returned_data = {
      search_offset: parsed_data["petfinder"]["lastOffset"]["$t"]
    }

    dogs_array = parsed_data["petfinder"]["pets"]["pet"]

    if dogs_array.size > 0
      returned_data["dogs"] = dogs_array.map do |dog_hash|
        self.parse_one_dog(dog_hash)
      end
    end

    returned_data
  end

  def self.get_dog_info(dog_id)
    
    api_data= RestClient.get("http://api.petfinder.com/pet.get?format=json&key=#{ENV['petFinderAPIKey']}&id=#{dog_id}")
    parsed_data = JSON.parse(api_data)
    
    if parsed_data["petfinder"]["pet"]
      dog_hash = parsed_data["petfinder"]["pet"]
      self.parse_one_dog(dog_hash)
    else
      nil
    end
  end

  private

  def self.parse_one_dog(dog_hash)
    #note for ryhan: sometimes this returns nilclass: [] error. Likely on photo or breed array, need to handle gracefully so no error thrown
    large_photos_hash = dog_hash["media"]["photos"]["photo"].select do |photo_hash|
      photo_hash["@size"] == "x"
    end

    large_photos_array = large_photos_hash.map{|photo| photo["$t"]}

    dog_breed_array = []
    dog_hash["breeds"]["breed"].each do |breed|
      if breed.class == Array
        dog_breed_array.push(breed[1])
      elsif breed.class == Hash
        dog_breed_array.push(breed["$t"])
      end
    end

    {
      pet_finder_id: dog_hash["id"]["$t"],
      name: dog_hash["name"]["$t"],
      age: dog_hash["age"]["$t"],
      size: dog_hash["size"]["$t"],
      breed: dog_breed_array,
      sex: dog_hash["sex"]["$t"],
      description: dog_hash["description"]["$t"],
      last_update: dog_hash["lastUpdate"]["$t"],
      photos: large_photos_array
    }
  end

  def self.convert_filters(filters)
    filters.map do |filter_touple|
      if filter_touple[0] == "size"
        filter_touple[1] = convert_size(filter_touple[1])
      elsif filter_touple[0] == "age"
        filter_touple[1] = convert_age(filter_touple[1])
      elsif filter_touple[0] == "sex"
        filter_touple[1] = convert_sex(filter_touple[1])
      end

      filter_touple
    end
  end

  def self.convert_size(unformatted_size)
    case unformatted_size.downcase
      when 'small'
        'S'
      when 'medium'
        'M'
      when 'large'
        'L'
      when 'xl'
        'XL'
    end
  end

  def self.convert_age(unformatted_age)
    case unformatted_age.downcase
      when 'puppy'
        'Baby'
      when 'young'
        'Young'
      when 'adult'
        'Adult'
      when 'senior'
        'Senior'
    end
  end

  def self.convert_sex(unformatted_sex)
    case unformatted_sex.downcase
      when 'male'
        'M'
      when 'female'
        'F'
    end
  end
end
