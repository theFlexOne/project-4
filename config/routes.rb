Rails.application.routes.draw do
  resources :barbers_services
  resources :orders_products
  resources :products
  resources :services
  resources :orders
  resources :appointments
  resources :clients
  resources :barbers
end
