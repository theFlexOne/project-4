class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :open
  belongs_to :barber
  belongs_to :client
end
