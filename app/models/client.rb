class Client < ApplicationRecord
  has_many :appointments
  has_many :barbers, through: :appointments
  has_many :orders

  def future_appointments
    self.appointments.where("date > ?", DateTime.now)
  end
end
