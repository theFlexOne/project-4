class CreateOrderProducts < ActiveRecord::Migration[7.0]
  def change
    create_join_table :orders, :products do |t|
      t.index :order_id
      t.index :product_id
      t.integer :quantity, default: 0, null: false

      t.timestamps
    end
  end
end
