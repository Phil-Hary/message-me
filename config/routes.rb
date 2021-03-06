Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'chatroom#index'
  get '/signUp', to:'users#new'
  post '/signUp', to:'users#new'
  get '/login', to:'sessions#new'
  post '/login', to:'sessions#create'
  delete '/logout/:user_id', to:'sessions#destroy'
  post '/message', to: 'message#create'
  mount ActionCable.server => '/cable'
end
