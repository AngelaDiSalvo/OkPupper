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

    render json: api_data
  end

  private

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
end
