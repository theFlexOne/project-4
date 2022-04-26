class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :name, length: 50, null: false

      t.timestamps
    end
  end
end
