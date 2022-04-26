class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name, length: 50, null: false
      t.decimal :price, precision: 5, scale: 2, null: false
      t.boolean :active, default: true, null: false
      t.text :description, length: 255, default: "", null: false

      t.timestamps
    end
  end
end
