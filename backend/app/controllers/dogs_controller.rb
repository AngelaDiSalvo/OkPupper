class DogsController < ApplicationController
  def index
    dogs = Dog.all 
    render json: dogs
  end
  
  def get_pet_finder_dogs
    # byebug
    zip_code = dog_params[:zip_code]
    
    api_data = PetFinderApi.get_dogs_array(zip_code)
    
    render json: api_data
  end
  
  private
  
  def dog_params
    params.require(:dog).permit(:zip_code)
  end
end