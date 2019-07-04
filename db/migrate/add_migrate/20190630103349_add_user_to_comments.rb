class AddUserToComments < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :item_id, :integer
    remove_column :comments, :user_id, :integer
    add_reference :comments, :item, foreign_key: true, null:false
    add_reference :comments, :user, foreign_key: true, null:false
  end
end
