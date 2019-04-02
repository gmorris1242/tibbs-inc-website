class OurWorkController < ApplicationController
  def index
    @src = params[:src]
    render :show if @src
  end

  def show
    @src = params[:src]
  end
end
