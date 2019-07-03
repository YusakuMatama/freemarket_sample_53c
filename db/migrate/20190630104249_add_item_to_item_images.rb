class AddItemToItemImages < ActiveRecord::Migration[5.0]
  def change
    remove_column :item_images, :item_id, :integer
    
    add_reference :item_images, :item, foreign_key: true, null:false
  end
end
