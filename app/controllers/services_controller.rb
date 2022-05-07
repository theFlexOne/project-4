class ServicesController < ApplicationController
  def index
    render json: Service.all, status: :ok
  end

  def show
    service = Service.find(params[:id])
    render json: service
  end
end
