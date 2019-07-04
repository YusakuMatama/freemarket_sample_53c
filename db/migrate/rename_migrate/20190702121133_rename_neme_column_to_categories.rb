class RenameNemeColumnToCategories < ActiveRecord::Migration[5.0]
  def change
    rename_column :categories, :neme, :name
  end
end
