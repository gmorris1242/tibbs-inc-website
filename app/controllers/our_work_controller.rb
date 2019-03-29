class OurWorkController < ApplicationController
  def index
    @src = params[:src]
  end
end
