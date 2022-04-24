class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.float :asking_price
      t.float :purchase_price
      t.boolean :active
      t.integer :current_quantity
      t.integer :quantity_sold

      t.timestamps
    end
  end
end
