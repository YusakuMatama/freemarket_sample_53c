class CreateOrderStatus < ActiveRecord::Migration[5.0]
  def change
    create_table :order_status do |t|
      t.integer :status ,null: false
      t.integer :item_id ,null: false ,foreign_key: true
      t.timestamps
    end
  end
end
