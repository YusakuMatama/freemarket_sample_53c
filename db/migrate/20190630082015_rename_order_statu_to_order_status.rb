class RenameOrderStatuToOrderStatus < ActiveRecord::Migration[5.0]
  def change
    rename_table :order_status, :order_statuses
  end
end
