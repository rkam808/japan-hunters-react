class CreateBounties < ActiveRecord::Migration[7.1]
  def change
    create_table :bounties do |t|
      t.string :description
      t.float :price
      t.references :user, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
