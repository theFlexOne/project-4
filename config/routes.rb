Rails.application.routes.draw do
  resources :orders_products
  resources :products
  resources :services
  resources :orders
  resources :appointments
  resources :clients
  resources :barbers
end
