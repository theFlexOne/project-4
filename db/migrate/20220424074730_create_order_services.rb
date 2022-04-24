class CreateOrderServices < ActiveRecord::Migration[7.0]
  def change
    create_table :order_services do |t|
      t.integer :order_id
      t.integer :service_id
      t.integer :quantity

      t.timestamps
    end
  end
end
