class Service < ApplicationRecord
  has_many :barber_services
  has_many :order_services
end
