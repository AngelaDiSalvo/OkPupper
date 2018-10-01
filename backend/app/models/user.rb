class User < ApplicationRecord
  has_many :user_dogs
  has_many :dogs, through: :user_dogs
  has_secure_password
end
