class AddViewCountToQuestions < ActiveRecord::Migration[6.1]
  def change
    add_column :questions, :view_count, :integer
    # add_column :questions, :likes, :integer
  end
end
