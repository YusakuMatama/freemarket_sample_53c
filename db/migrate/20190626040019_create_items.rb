class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name ,null: false
      t.text :detail ,null: false
      t.integer :category_id ,null: false, foregin_key: true
      t.integer :brand_id ,null: false, foregin_key: true
      t.integer :condition ,null: false
      t.integer :delivery_cost ,null: false
      t.integer :delivery_prefecture ,null: false
      t.integer :days_to_ship ,null: false
      t.integer :price ,null: false
      t.boolean :sales_condition ,null: false, default: false
      t.integer :user_id ,null: false, foregin_key: true
      t.timestamps
    end
  end
end
