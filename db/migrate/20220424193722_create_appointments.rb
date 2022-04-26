class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :date, comparison: { greater_than: DateTime.now }, null: false
      t.integer :client_id
      t.integer :barber_id
      t.boolean :open, default: true, null: false

      t.timestamps
    end
  end
end
