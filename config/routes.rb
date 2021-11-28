Rails.application.routes.draw do
  root to: 'products#show'
  get '/products/:id', to: 'products#show'
end

