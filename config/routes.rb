Rails.application.routes.draw do
  root to: 'products#show'
  get '/products/:id', to: 'products#show'
  post '/products/:product_id/reviews', to: 'reviews#create'
  get '/products/:product_id/reviews', to: 'reviews#index'
  post '/products/:product_id/reviews', to: 'reviews#create'
end

