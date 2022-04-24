class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :when, :barber_id, :client_id

  belongs_to :client
  belongs_to :barber, serializer: { only: [:name] }
end
