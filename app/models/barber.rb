FEDERAL_MINIMUM_WAGE = 7.50

class Barber < ApplicationRecord
  has_many :appointments
  has_many :clients, through: :appointments

  validates :name, presence: true
  validates :wage, presence: true, comparison: { greater_than: FEDERAL_MINIMUM_WAGE }
  validates :start_date, presence: true #, comparison: { less_than: DateTime.now }

  def future_appointments
    appointments.filter do |a|
      a.when > DateTime.now
    end
  end

  def past_appointments
    appointments.filter do |a|
      a.when < DateTime.now
    end
  end

  def next_appointment
    future_appointments.first
  end
end
