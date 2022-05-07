class AddImagePathToBarbers < ActiveRecord::Migration[7.0]
  def change
    add_column :barbers, :img_path, :string, default: "../../assets/default_profile_image.png"
  end
end
