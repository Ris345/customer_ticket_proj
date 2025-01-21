class Comment < ApplicationRecord
    def index
        @comments = Comment.where(ticket_id: params[:ticket_id])
        render json: @comments
      end 
end
