class DogsController < ApplicationController
  def index
    dogs = Dog.all
    render json: dogs
  end

  def get_pet_finder_dogs
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
      dogs: filter_viewed_dogs(api_data["dogs"])
    }

    if filtered_data[:dogs].count > 0
      render json: filtered_data
    else
      render json: {status: 500, message: "No dogs matching criteria"}.to_json
    end
  end

  private
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

  def filter_viewed_dogs(dogs_array)
    #note: this logic needs to be replaced with UserDog once we have user
    dogs_array.reject {|dog_object| Dog.exists?(pet_finder_id: dog_object[:pet_finder_id])}
  end
end
