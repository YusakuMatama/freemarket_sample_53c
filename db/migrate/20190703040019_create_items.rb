class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name ,null: false
      t.text :detail ,null: false
      t.references :category ,null: false, foreign_key: true
      t.references :brand ,foreign_key: true
      t.integer :condition ,null: false
      t.integer :delivery_cost ,null: false
      t.integer :delivery_prefecture ,null: false
      t.integer :delivery_method ,null: false
      t.integer :days_to_ship ,null: false
      t.integer :price ,null: false
      t.boolean :sales_condition ,null: false, default: false
      t.references :user , null: false, foreign_key: true
      t.integer :buyer_id , foregin_key: true
      t.date :selled_at
      t.timestamps
    end
  end
end
