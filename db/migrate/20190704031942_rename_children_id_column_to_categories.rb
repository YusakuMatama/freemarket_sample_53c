class RenameChildrenIdColumnToCategories < ActiveRecord::Migration[5.0]
  def change
    rename_column :categories, :children_id, :grandchildren_id
  end
end
