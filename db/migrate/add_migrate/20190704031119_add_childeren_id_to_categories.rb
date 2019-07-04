class AddChilderenIdToCategories < ActiveRecord::Migration[5.0]
  def change
    add_column :categories, :children_id, :integer    
  end
end
