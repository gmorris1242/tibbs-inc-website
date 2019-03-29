class OurWorkController < ApplicationController
  def index
    @src = params[:data]
  end
end
