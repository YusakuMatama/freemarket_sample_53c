class AddUserToProfiles < ActiveRecord::Migration[5.0]
  def change
    remove_column :profiles, :user_id, :integer

    add_reference :profiles, :user, index: true, null: false
  end
end
