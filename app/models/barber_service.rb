class BarberService < ApplicationRecord
  belongs_to :barber
  belongs_to :service
end
