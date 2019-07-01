class AddCategoryToItems < ActiveRecord::Migration[5.0]
  def change
    add_reference :items, :category, null:false
    add_reference :items, :brand, null:false
    add_reference :items, :user, null:false
  end
end
