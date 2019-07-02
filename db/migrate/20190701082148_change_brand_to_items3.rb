class ChangeBrandToItems3 < ActiveRecord::Migration[5.0]
  def change
    remove_column :items, :brand_id, :integer

    add_reference :items, :brand, null:true
  end
end
