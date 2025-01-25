class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
      end
      def show
        @users = User.find(params[:id])
      end
    
      def new
        @users = User.new
      end
end
