class UpdateColumnsInServices < ActiveRecord::Migration[7.0]
  def change
    change_column :services, :price, :float, :null => false
  end
end
