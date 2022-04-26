class BarbersController < ApplicationController
  def index
    @barbers = Barber.all
    render json: barber_params, status: :ok
  end

  def show
    @barber = Barber.find(params[:id])
    render json: @barber
  end
end
