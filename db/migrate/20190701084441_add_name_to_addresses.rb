class AddNameToAddresses < ActiveRecord::Migration[5.0]
  def change
    add_column :addresses, :first_name ,:string ,null: false
    add_column :addresses, :last_name ,:string ,null: false
    add_column :addresses, :first_name_kana ,:string ,null: false
    add_column :addresses, :last_name_kana ,:string ,null: false
    add_column :addresses, :tel ,:string
  end
end
