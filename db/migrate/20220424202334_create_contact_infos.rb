class CreateContactInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_infos do |t|
      t.integer :client_id, null: false
      t.string :email, limit: 50
      t.string :street_address, limit: 100
      t.string :secondary_address, limit: 100
      t.string :city, limit: 25
      t.string :state, limit: 2
      t.string :zip_code, limit: 5

      t.timestamps
    end
  end
end
