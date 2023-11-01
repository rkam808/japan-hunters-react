class AddClaimedToBounties < ActiveRecord::Migration[7.1]
  def change
    add_column :bounties, :claimed_by_user, :integer
  end
end
