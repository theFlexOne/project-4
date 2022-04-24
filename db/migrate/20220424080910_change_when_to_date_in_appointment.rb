class ChangeWhenToDateInAppointment < ActiveRecord::Migration[7.0]
  def change
    rename_column :appointments, :when, :date
  end
end
