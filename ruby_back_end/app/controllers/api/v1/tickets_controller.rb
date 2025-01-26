  module Api
    module V1
      class TicketsController < ApplicationController
        def index
          tickets = Ticket.all
          render json: tickets
        end
  
        def create
          ticket = Ticket.new(ticket_params)
          if ticket.save
            render json: [ticket], status: :created
          else
            render json: ticket.errors, status: :unprocessable_entity
          end
  
          private
  
          def ticket_params
            params.require(:ticket).permit(:title, :description, :status, :priority, :user_id)
          end
        end
      end
    end
  end