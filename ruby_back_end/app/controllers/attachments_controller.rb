class AttachmentsController < ApplicationController
    def index
      @attachments = Attachment.all
      render json: @attachments
    end
    def show
      @attachments = Attachment.find(params[:id])
    end
  
    def new
      @attachments = Attachment.new
    end
  
    # other actions (show, create, update, destroy)
  end