class ChangeBrandToItems < ActiveRecord::Migration[5.0]
  def change
    def up
      change_column_null :items, :brand_id, true
    end
  
    def down
      change_column_null :items, :brand_id, false
    end
  end
end
