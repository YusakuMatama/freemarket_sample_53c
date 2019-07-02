class AddBrandToItems < ActiveRecord::Migration[5.0]
  def change

    def up
      change_column :items, :brand_id, null: true
    end
  
    # 変更前の状態
    def down
      change_column :items, :brand_id, null: false
    end
  end
end
