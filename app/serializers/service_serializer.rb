class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description
end
