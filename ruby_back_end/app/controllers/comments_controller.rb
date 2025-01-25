class CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render json: @comments
      end
      def show
        @comments = Comment.find(params[:id])
      end
    
      def new
        @comments = Comment.new
      end
    
end
