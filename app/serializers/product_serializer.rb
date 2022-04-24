class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :asking_price, :purchase_price, :active, :current_quantity, :quantity_sold
end
