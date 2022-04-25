class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.decimal :price, precision: 5, scale: 2
      t.boolean :active
      t.text :description

      t.timestamps
    end
  end
end
