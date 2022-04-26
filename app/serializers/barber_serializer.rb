class BarberSerializer < ActiveModel::Serializer
  attributes :id, :name, :station
  has_many :clients
  has_many :appointments
  has_many :services
end
