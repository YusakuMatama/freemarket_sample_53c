class AddSelleridToItems < ActiveRecord::Migration[5.0]
  def change
    rename_column :items, :user_id, :seller_id
    add_column :items, :buyer_id, :integer ,foregin_key: true
    add_column :items, :selled_at, :date
  end
end
