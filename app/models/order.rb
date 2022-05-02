class Order < ApplicationRecord
  # belongs_to :client
  has_many :orders_products
  has_many :products, through: :orders_products
  has_many :orders_services
  has_many :services, through: :orders_services

  def order_total
  end

  def add_product(id)
    product.create id
  end
end
