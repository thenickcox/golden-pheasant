class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :stars, limit: 2 # smallint
      t.text :content
      t.integer :product_id
    end
    add_index :reviews, :product_id
  end
end
