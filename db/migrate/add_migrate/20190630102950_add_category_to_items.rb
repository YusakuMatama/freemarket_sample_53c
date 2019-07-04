class AddCategoryToItems < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :category_id, :integer
    remove_column :items, :brand_id, :integer
    remove_column :items, :seller_id, :integer
    add_reference :items, :category, foreign_key: true, null:false
    add_reference :items, :brand, foreign_key: true, null:false
    add_reference :items, :user, foreign_key: true, null:false
  end
end
