class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :appointments
  has_many :barbers
end
