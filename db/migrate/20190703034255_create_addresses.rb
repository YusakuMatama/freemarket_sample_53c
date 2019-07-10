class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :first_name ,null: false
      t.string :last_name ,null: false
      t.string :first_name_kana ,null: false
      t.string :last_name_kana ,null: false
      t.string :zip ,null: false
      t.integer :prefectures ,null: false
      t.string :city ,null: false
      t.string :block ,null: false
      t.string :building
      t.string :tel
      t.references :user ,null: false , foreign_key: true
      t.timestamps
    end
  end
end
