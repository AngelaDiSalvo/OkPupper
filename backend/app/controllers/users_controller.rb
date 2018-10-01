class UsersController < ApplicationController
  skip_before_action

  def create
    user = User.create(user_params)
    render json: {
      user: user,
      token: encode_token({user_id: user.id})
    }
  end

  def profile
    render json: current_user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :zip_code)
  end
end
