class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.text :title
      t.text :content
      t.references :user, foreign_key: true
      t.string :picture

      t.timestamps
    end
  end
end
