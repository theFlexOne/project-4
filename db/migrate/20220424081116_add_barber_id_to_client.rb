class AddBarberIdToClient < ActiveRecord::Migration[7.0]
  def change
    add_column :clients, :barber_id, :integer
  end
end
