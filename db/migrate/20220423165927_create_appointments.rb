class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :when
      t.integer :barber_id
      t.integer :client_id

      t.timestamps
    end
  end
end
