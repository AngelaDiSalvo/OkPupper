class UserDogsController < ApplicationController
  def create
    #note: change user to actual based on user_id: user_dog_params[:userId] when ready

    user_dog = UserDog.new(user: User.find(5), pet_finder_id: user_dog_params[:petFinderId], is_saved: user_dog_params[:isUserSaving])

    if user_dog.save
      render json: {status: 200, message: "Successfully saved dog"}.to_json
    else
      render json: {status: 500, message: "Could not save dog"}.to_json
    end
  end
  
  def index
    dogs = UserDog.all
    
    dogs.map { |dog| dog.pet_finder_id}

    #note: update to user id when add authentication
    # where(user.id == user_dog_params[:userId])
    render json: dogs
  end


  def get_pet_finder_dogs
    user_id = 5
    
    potential_filters = [
      ["location", dog_params[:zipCode]],
      ["size", convert_size(dog_params[:size])],
      ["age", convert_age(dog_params[:age])],
      ["sex", convert_gender(dog_params[:gender])],
      ["offset", dog_params[:offset]]
    ]

    requested_filters = potential_filters.select {|filter| filter[1]}

    api_data = PetFinderApi.get_dogs_array(requested_filters)

    #note: also need to check if dogs have been saved in DB before returning new dogs; this is expensive, maybe push to client side
    
    filtered_data = {
      api_data: api_data[:search_offset],
      dogs: filter_viewed_dogs(user_id, api_data["dogs"])
    }
    
    if filtered_data[:dogs].count > 0
      render json: filtered_data
    else
      render json: {status: 500, message: "No dogs matching criteria"}.to_json
    end
  end

  private
  
  def user_dog_params
    params.require(:user_dog).permit(:userId, :petFinderId, :isUserSaving)
  end

  def dog_params
    params.require(:dog).permit(:zipCode, :size, :gender, :age, :offset)
  end

  def convert_size(unformatted_size)
    if unformatted_size.downcase == 'any'
      false
    elsif unformatted_size.downcase == 'small' || unformatted_size.downcase == 'medium' || unformatted_size.downcase == 'large' || unformatted_size.downcase == 'xl'
      unformatted_size.downcase
    else
      'Unknown size input'
    end
  end

  def convert_age(unformatted_age)
    if unformatted_age.downcase == 'any'
      false
    elsif unformatted_age.downcase == 'puppy' || unformatted_age.downcase == 'young' || unformatted_age.downcase == 'adult' || unformatted_age.downcase == 'senior'
      unformatted_age.downcase
    else
      'Unknown age input'
    end
  end

  def convert_gender(unformatted_gender)
    if unformatted_gender.downcase == 'any'
      false
    elsif unformatted_gender.downcase == 'male' || unformatted_gender.downcase == 'female'
      unformatted_gender.downcase
    else
      'Unknown gender input'
    end
  end

  def filter_viewed_dogs(user_id, dogs_array)
    user_dogs = UserDog.where(["user_id = :user_id", {user_id: user_id}])
    
    transformed_user_dogs = user_dogs.map{|dog_object| dog_object.pet_finder_id}
    
    filtered_dogs = dogs_array.reject do |dog_object|
      is_dog_in_list(transformed_user_dogs, dog_object[:pet_finder_id].to_i)
    end
  end
  
  def is_dog_in_list(database_array, pet_finder_id)
    database_array.include?(pet_finder_id)
  end
end
