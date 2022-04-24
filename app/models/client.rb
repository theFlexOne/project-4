class Client < ApplicationRecord
  has_many :appointments
  has_many :barbers, through: :appointments

  validates :name, presence: true
  validates :email, presence: true, format: { with: /[\!\$\&\*\-\=\^\`\|\~\#\%\'\+\/\?\_\{\}A-Za-z0-9]+@.+\..+/ }, uniqueness: true
end

#? -> ! $ & * - = \^ ` | ~ # % ‘ + / ? _ { }
