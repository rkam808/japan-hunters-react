class BountiesController < ApplicationController
    def index
        bounties = Bounty.all.order(created_at: :desc)
        render json: bounties
    end

    def new
        @bounty = Bounty.new
        # authorize @bounty - for pundit
    end

    def create
        @bounty = Bounty.new(bounty_params)
        @bounty.user = current_user

        # new_item = Item.new()
        # authorize @bounty - for pundit

        if @bounty.save
            redirect_to bounty_path(@bounty)
        else
            redirect_to new_bounty_path
        end
    end

    private

    def bounty_params
        params.require(:bounty).permit(:description, :price, :item, :photo)
    end
end
