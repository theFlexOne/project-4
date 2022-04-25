class Order < ApplicationRecord
  has_one :client # can be nil
  belongs_to :appointment # can be nil

  def order_total
  end
end
