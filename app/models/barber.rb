class Barber < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments
  has_many :barber_services
  has_many :services, through: :barber_services
end
