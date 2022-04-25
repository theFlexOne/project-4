class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :date
      t.integer :client_id
      t.integer :barber_id
      t.boolean :open

      t.timestamps
    end
  end
end
