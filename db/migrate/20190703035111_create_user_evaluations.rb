class CreateUserEvaluations < ActiveRecord::Migration[5.0]
  def change
    create_table :user_evaluations do |t|
      t.integer :high_count
      t.integer :medium_count
      t.integer :low_count
      t.references :user, null: false ,index: true, foreign_key: true
      t.text :comment
      t.timestamps
    end
  end
end
