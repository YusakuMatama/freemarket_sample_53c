class AddUserToAddresses < ActiveRecord::Migration[5.0]
  def change
    remove_column :addresses, :user_id, :integer

    add_reference :addresses, :user,  null: false
  end
end
