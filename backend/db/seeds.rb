User.delete_all
UserDog.delete_all

# def seed_dogs
#   all_dogs = PetFinderApi.get_dogs_array(77002)
#   all_dogs.each do |dog_hash|
#     Dog.create(dog_hash)
#   end
# end

# ryhan =
User.create(password: "ryhan", email: "ryhan@example.com")
# angela =
User.create(password: "angela", email: "angela@example.com")
# stephen =
User.create(password: "stephen", email: "stephen@example.com")

# seed_dogs
#
# 25.times do
#   user_array = [ryhan, angela, stephen]
#
#   UserDog.create(user: user_array.sample, dog: Dog.all.sample)
# end
