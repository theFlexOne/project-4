class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.boolean :active

      t.timestamps
    end
  end
end
