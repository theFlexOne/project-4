class AddStationToBarber < ActiveRecord::Migration[7.0]
  def change
    add_column :barbers, :station, :integer
  end
end
