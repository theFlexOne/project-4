class BarberSerializer < ActiveModel::Serializer
  attributes :id, :name, :station, :img_path
  has_many :clients
  has_many :appointments
  has_many :services
end
