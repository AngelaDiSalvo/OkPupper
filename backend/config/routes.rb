Rails.application.routes.draw do
  resources :user_dogs

  post 'user_dogs/get_dogs', :to => 'user_dogs#get_pet_finder_dogs'
end
