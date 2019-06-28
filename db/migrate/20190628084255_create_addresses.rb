class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :zip ,null: false
      t.integer :prefectures ,null: false
      t.string :city ,null: false
      t.string :block ,null: false
      t.string :building
      t.integer :user_id ,null: false ,foreign_key: true
      t.timestamps
    end
  end
end
