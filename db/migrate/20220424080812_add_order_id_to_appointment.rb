class AddOrderIdToAppointment < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :order_id, :integer
  end
end
