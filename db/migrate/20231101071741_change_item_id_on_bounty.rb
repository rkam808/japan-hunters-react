class ChangeItemIdOnBounty < ActiveRecord::Migration[7.1]
  def change
    change_column_null :bounties, :item_id, true
  end
end
