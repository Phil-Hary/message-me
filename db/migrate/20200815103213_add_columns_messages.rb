class AddColumnsMessages < ActiveRecord::Migration[6.0]
  def change
  	add_column :messages, :user_id, :id
  end
end
