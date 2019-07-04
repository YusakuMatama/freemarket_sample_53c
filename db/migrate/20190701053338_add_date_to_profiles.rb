class AddDateToProfiles < ActiveRecord::Migration[5.0]
  def change
    add_column :profiles, :card_yy, :string, null:false
    add_column :profiles, :card_mm, :string, null:false
    add_column :profiles, :card_sec_id, :string, null:false
  end
end
