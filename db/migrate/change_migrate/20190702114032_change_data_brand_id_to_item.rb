class ChangeDataBrandIdToItem < ActiveRecord::Migration[5.0]
  def change
    change_column :items, :brand_id, :integer, null: true, foregin_key: true
  end
end
