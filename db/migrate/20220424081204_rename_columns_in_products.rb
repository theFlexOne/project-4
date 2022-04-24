class RenameColumnsInProducts < ActiveRecord::Migration[7.0]
  def change
    rename_column :products, :asking_price, :price
    rename_column :products, :current_quantity, :current_stock
  end
end
