class Service < ApplicationRecord
  has_many :orders_services
  has_many :orders, through: :orders_services
  has_many :barber_services
  has_many :barbers, through: :barber_services
end
