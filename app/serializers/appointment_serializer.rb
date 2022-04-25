class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :client_id, :barber_id, :open
end
