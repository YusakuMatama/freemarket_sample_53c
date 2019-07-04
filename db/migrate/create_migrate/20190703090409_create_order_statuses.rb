class CreateOrderStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :order_statuses do |t|
      t.integer :status ,null: false
      t.references :item, null: false, foreign_key: true
      t.timestamps
    end
  end
end
