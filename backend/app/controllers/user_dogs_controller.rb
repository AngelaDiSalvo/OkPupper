class UserDogsController < ApplicationController
  def create
    dog = Dog.create(pet_finder_id: user_dog_params[:petFinderId])

    #note: change user to actual based on user_id: user_dog_params[:userId] when ready

    user_dog = UserDog.new(user: User.all.first, dog: dog, is_saved: user_dog_params[:isUserSaving])

    if user_dog.save
      render json: {status: 200, message: "Successfully saved dog"}.to_json
    else
      render json: {status: 500, message: "Could not save dog"}.to_json
    end
  end
  
  def index
    dogs = UserDog.all
    
    dogs.map { |dog| dog.pet_finder_id}
    
    puts dogs
    #note: update to user id when add authentication
    # where(user.id == user_dog_params[:userId])
    render json: dogs
  end

  private

  def user_dog_params
    params.require(:user_dog).permit(:userId, :petFinderId, :isUserSaving)
  end
end
