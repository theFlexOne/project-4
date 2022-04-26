class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, limit: 25
      t.text :description, limit: 255
      t.decimal :price, precision: 5, scale: 2
      t.boolean :active, default: true, null: false
      t.integer :current_stock, null: false, default: 0
      t.integer :quantity_sold, null: false, default: 0

      t.timestamps
    end
  end
end
