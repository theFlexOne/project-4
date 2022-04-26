class CreateBarbers < ActiveRecord::Migration[7.0]
  def change
    create_table :barbers do |t|
      t.string :name, length: 50, null: false
      t.date :start_date, comparison: { less_than: Date.today }
      t.float :wage, precision: 4, scale: 2, null: false, comparison: { greater_than: 7.5 }
      t.integer :station, comparison: { greater_than: 0, less_than: 6 }

      t.timestamps
    end
  end
end
