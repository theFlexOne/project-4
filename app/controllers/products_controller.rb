class ProductsController < ApplicationController
  def index
    render json: Product.all, status: :ok
  end

  def show
    product = Product.find(params[:id])
    render json: product
  end
end
