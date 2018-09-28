Dog.delete_all

def seed_dogs
  all_dogs = PetFinderApi.get_dogs_array(77002)

  all_dogs.each do |dog_hash|
    Dog.first_or_create(dog_hash)
  end
end

seed_dogs
