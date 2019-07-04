class AddUserToFavoriteItems < ActiveRecord::Migration[5.0]
  def change
    remove_column :favorite_items, :user_id, :integer
    remove_column :favorite_items, :item_id, :integer
    add_reference :favorite_items, :user,  null: false
    add_reference :favorite_items, :item,  null: false
  end
end
