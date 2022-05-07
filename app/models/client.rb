class Client < ApplicationRecord
  has_many :appointments
  has_many :barbers, through: :appointments
  has_many :orders
  has_one :contact_info

  after_create :create_contact_info

  def future_appointments
    self.appointments.where("date > ?", DateTime.now)
  end

  private

  def create_contact_info
    ContactInfo.create client_id: self.id
  end
end
