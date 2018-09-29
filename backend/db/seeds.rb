Dog.delete_all
User.delete_all
UserDog.delete_all

def seed_dogs
  all_dogs = PetFinderApi.get_dogs_array(77002)
  all_dogs.each do |dog_hash|
    Dog.create(dog_hash)
  end
end

ryhan = User.create(username: "RyhanC", password: "ryhan", email: "ryhan@example.com", zip_code: 77407)
angela = User.create(username: "AngelaD", password: "angela", email: "angela@example.com", zip_code: 77002)
stephen = User.create(username: "StephenF", password: "stephen", email: "stephen@example.com", zip_code: 77002)

seed_dogs

25.times do
  user_array = [ryhan, angela, stephen]

  UserDog.create(user: user_array.sample, dog: Dog.all.sample)
end
