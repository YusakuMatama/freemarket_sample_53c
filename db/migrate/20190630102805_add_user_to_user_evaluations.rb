class AddUserToUserEvaluations < ActiveRecord::Migration[5.0]
  def change
    remove_column :user_evaluations, :user_id, :integer

    add_reference :user_evaluations, :user, index: true, null: false
  end
end
