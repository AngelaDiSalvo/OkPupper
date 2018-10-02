Rails.application.routes.draw do
  resources :user_dogs
  resources :users, only: [:create]

  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  post 'user_dogs/get_dogs', :to => 'user_dogs#get_pet_finder_dogs'
  post 'user_dogs/get_saved_dogs', :to => 'user_dogs#get_saved_dogs'
end
