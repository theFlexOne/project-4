class BarbersController < ApplicationController
  def index
    render json: Barber.all, status: :ok
  end
end
