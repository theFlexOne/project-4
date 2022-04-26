class CreateOrderServices < ActiveRecord::Migration[7.0]
  def change
    create_join_table :orders, :services do |t|
      t.index :order_id
      t.index :service_id
      t.integer :quantity, default: 0, null: false

      t.timestamps
    end
  end
end
