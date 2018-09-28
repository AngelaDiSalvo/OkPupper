Dog.delete_all

def seed_dogs
  all_dogs = PetFinderApi.get_dogs_array(77002)
  byebug

  all_dogs.each do |dog_hash|
    Dog.create(dog_hash)
  end
end

seed_dogs
