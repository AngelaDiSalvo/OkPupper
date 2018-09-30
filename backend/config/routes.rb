Rails.application.routes.draw do
  resources :dogs, only: [:index]
  resources :user_dogs

  post 'dogs/get_dogs', :to => 'dogs#get_pet_finder_dogs'
end
