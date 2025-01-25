class TicketsController < ApplicationController
    def index
        @tickets = Ticket.all
        render json: @tickets
      end
      def show
        @tickets = Ticket.find(params[:id])
      end
    
      def new
        @tickets = Ticket.new
      end
end
