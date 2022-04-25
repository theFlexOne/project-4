class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.decimal :price, precision: 5, scale: 2
      t.boolean :active
      t.integer :current_stock
      t.integer :quantity_sold

      t.timestamps
    end
  end
end
