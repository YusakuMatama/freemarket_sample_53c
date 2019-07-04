class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :nickname ,null: false ,unique: true
      t.string :first_name ,null: false
      t.string :last_name ,null: false
      t.string :first_name_kana ,null: false
      t.string :last_name_kana ,null: false
      t.date :birthday ,null: false
      t.string :tel
      t.string :card_id ,null: false
      t.string :card_yy ,null: false
      t.string :card_mm ,null: false
      t.string :card_sec_id ,null: false
      t.integer :money ,null: false ,default:0
      t.integer :point ,null: false ,default:0
      t.text :comment
      t.references :user ,null: false, index: true, foreign_key: true
      t.timestamps
    end
  end
end
