class BarberSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :wage, :station
end
