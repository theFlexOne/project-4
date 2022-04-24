class BarberSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :wage

  has_many :appointments
  has_many :clients
end
