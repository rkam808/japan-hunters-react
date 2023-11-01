class AddPhotoUrlToBounties < ActiveRecord::Migration[7.1]
  def change
    add_column :bounties, :photo_url, :string
  end
end
