class Barber < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments
  has_many :barbers_services
  has_many :services, through: :barbers_services

  def future_appointments
    self.appointments.where("date > ?", DateTime.now)
  end
end
