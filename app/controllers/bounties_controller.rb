class BountiesController < ApplicationController
    def index
        bounties = Bounty.all.order(created_at: :desc)
        render json: bounties
    end
end
