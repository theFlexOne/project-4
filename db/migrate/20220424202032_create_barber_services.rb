class CreateBarberServices < ActiveRecord::Migration[7.0]
  def change
    create_join_table :barbers, :services do |t|
      t.index :barber_id
      t.index :service_id

      t.timestamps
    end
  end
end
