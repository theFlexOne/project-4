class Order < ApplicationRecord
  has_one :client
  has_one :appointment
  has_many :order_products
  has_many :order_services
end
