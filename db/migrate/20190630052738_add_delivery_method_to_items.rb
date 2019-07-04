class AddDeliveryMethodToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :delivery_method, :integer, null:false
  end
end
