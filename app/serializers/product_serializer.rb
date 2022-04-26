class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :current_stock
end
