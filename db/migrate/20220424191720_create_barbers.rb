class CreateBarbers < ActiveRecord::Migration[7.0]
  def change
    create_table :barbers do |t|
      t.string :name
      t.date :start_date
      t.float :wage
      t.integer :station

      t.timestamps
    end
  end
end
