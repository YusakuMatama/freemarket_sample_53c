class AddItemToOrderStatuses < ActiveRecord::Migration[5.0]
  def change
    remove_column :order_statuses, :item_id, :integer
    add_reference :order_statuses, :item, foreign_key: true, null:false
  end
end
