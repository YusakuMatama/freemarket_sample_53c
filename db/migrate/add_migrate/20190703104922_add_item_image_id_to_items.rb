class AddItemImageIdToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :item_image_id, :integer
  end
end
