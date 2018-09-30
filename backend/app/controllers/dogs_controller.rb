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
      api_data: api_data[search_offset],
      dogs: filter_viewed_dogs(api_data["dogs"])
    }

    render json: filtered_data
  end

  private

  #note: josh mentioned moving all api related conversions to pet_finder_api.rb and just using this to check for true/false

  def dog_params
    params.require(:dog).permit(:zipCode, :size, :gender, :age, :offset)
  end

  def convert_size(unformatted_size)
    case unformatted_size.downcase
      when 'small'
        'S'
      when 'medium'
        'M'
      when 'large'
        'L'
      when 'xl'
        'XL'
      when 'any'
        false
      else
        'Unknown size input'
    end
  end

  def convert_age(unformatted_age)
    case unformatted_age.downcase
      when 'puppy'
        'Baby'
      when 'young'
        'Young'
      when 'adult'
        'Adult'
      when 'senior'
        'Senior'
      when 'any'
        false
      else
        'Unknown age input'
    end
  end

  def convert_gender(unformatted_gender)
    case unformatted_gender.downcase
      when 'male'
        'M'
      when 'female'
        'F'
      when 'any'
        false
      else
        'Unknown gender input'
    end
  end

  def filter_viewed_dogs(dogs_array)
    #note: this logic needs to be replaced with UserDog once we have user
    dogs_array.reject {|dog_object| Dog.exists?(pet_finder_id: dog_object[:pet_finder_id])}
  end
end
