class OrderSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :appointment_id
end
