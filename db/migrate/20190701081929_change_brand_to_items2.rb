class ChangeBrandToItems2 < ActiveRecord::Migration[5.0]
  def change
    def up
      change_column_null :items, :brand, :integer, null: true
    end
  
    def down
      change_column_null :items, :brand, :integer, null: false
    end
  end
end
