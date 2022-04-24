class Appointment < ApplicationRecord
  belongs_to :barber
  belongs_to :client

  def client_name
    Client.find(self.client_id).name
  end

  def barber_name
    Barber.find(self.barber_id).name
  end

  def to_details_s
    date = self.when.strftime("%A, %b %d")
    time = self.when.strftime("%X")
    "with #{client_name} on #{date}, at #{time}"
  end
end
