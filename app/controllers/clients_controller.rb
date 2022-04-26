class ClientsController < ApplicationController
  def index
    @clients = Client.all
    render json: @clients, status: :ok
  end

  def show
    @client = Client.find(params[:id])
    render json: @client, status: :ok
  end
end
